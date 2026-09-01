// ==========================================================================
// 1. BASE DE DATOS DE PRODUCTOS
// ==========================================================================
const products = [
    {
        id: 'gta-v-ps4',
        name: 'Grand Theft Auto V',
        platform: 'PS4',
        type: 'Cuenta Primaria',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 'ea-fc-26-ps5',
        name: 'EA Sports FC 26',
        platform: 'PS5',
        type: 'Cuenta Primaria',
        price: 45000,
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 'spiderman-2-ps5',
        name: 'Marvel\'s Spider-Man 2',
        platform: 'PS5',
        type: 'Cuenta Secundaria',
        price: 28000,
        image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 'cyberpunk-pc',
        name: 'Cyberpunk 2077',
        platform: 'PC',
        type: 'Código Digital (Steam)',
        price: 22000,
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80'
    }
];

// Estado de la Aplicación
let cart = [];
let currentUser = null;

// Elementos del DOM
const productGrid = document.getElementById('product-grid');
const cartCountEl = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalPriceEl = document.getElementById('cart-total-price');
const authModal = document.getElementById('auth-modal');

// ==========================================================================
// 2. NOTIFICACIONES TOAST (UI)
// ==========================================================================
function showNotification(message, type = 'warning') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast', type);

    const icon = type === 'warning' ? '⚠️' : '✅';
    toast.innerHTML = `<span>${icon}</span> <div>${message}</div>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ==========================================================================
// 3. RENDERIZADO DEL CATÁLOGO
// ==========================================================================
function renderProducts() {
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('article');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="card-badge">${product.platform}</div>
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <span class="product-type">${product.type}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price.toLocaleString('es-AR')} ARS</div>
                <button class="btn-add-cart" onclick="addToCart('${product.id}')">
                    Agregar al Carrito
                </button>
            </div>
        `;

        productGrid.appendChild(productCard);
    });
}

// ==========================================================================
// 4. LÓGICA DEL CARRITO
// ==========================================================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartUI();
        showNotification(`${product.name} agregado al carrito.`, 'success');
    }
}

function updateCartUI() {
    cartCountEl.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p style="color: var(--text-secondary);">Tu carrito está vacío.</p>';
        cartTotalPriceEl.textContent = '$0 ARS';
        return;
    }

    cartItemsEl.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        total += item.price;
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <div>
                <div class="cart-item-title">${item.name}</div>
                <small style="color: var(--text-secondary);">${item.platform} - ${item.type}</small>
            </div>
            <div class="cart-item-price">$${item.price.toLocaleString('es-AR')}</div>
        `;
        cartItemsEl.appendChild(div);
    });

    cartTotalPriceEl.textContent = `$${total.toLocaleString('es-AR')} ARS`;
}

function toggleCartModal() {
    cartModal.classList.toggle('active');
}

// ==========================================================================
// 5. LÓGICA DE PAGO POR TRANSFERENCIA Y WHATSAPP
// ==========================================================================
function goToPayment() {
    if (cart.length === 0) {
        showNotification('Tu carrito está vacío.', 'warning');
        return;
    }

    if (!currentUser) {
        toggleCartModal();
        openAuthModal('login');
        showNotification('Iniciá sesión o registrate para continuar con la compra.', 'warning');
        return;
    }

    // Calcular Total
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    // Cambiar vistas del modal
    document.getElementById('cart-view').classList.add('hidden');
    document.getElementById('payment-view').classList.remove('hidden');
    document.getElementById('cart-title').textContent = 'Datos de Transferencia';

    // Construir mensaje dinámico para WhatsApp (Reemplazá con tu número real)
    const numeroTelefono = '5493765036949'; // <-- Poné tu número de celular aquí con código de área
    const listaJuegos = cart.map(i => `- ${i.name} (${i.platform})`).join('%0A');
    const mensajeWS = `Hola! Realicé la transferencia para comprar:%0A${listaJuegos}%0A%0ATotal: $${total.toLocaleString('es-AR')} ARS%0AMi email registrado es: ${currentUser.email}`;

    document.getElementById('ws-btn').href = `https://wa.me/${numeroTelefono}?text=${mensajeWS}`;
}

function backToCart() {
    document.getElementById('payment-view').classList.add('hidden');
    document.getElementById('cart-view').classList.remove('hidden');
    document.getElementById('cart-title').textContent = 'Tu Carrito';
}

function copyToClipboard(text, successMessage) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(successMessage, 'success');
    });
}

// ==========================================================================
// 6. LÓGICA DE AUTENTICACIÓN
// ==========================================================================
function openAuthModal(tab = 'login') {
    switchAuthTab(tab);
    authModal.classList.add('active');
}

function closeAuthModal() {
    authModal.classList.remove('active');
}

function switchAuthTab(tabName) {
    document.getElementById('form-login').classList.add('hidden');
    document.getElementById('form-register').classList.add('hidden');
    document.getElementById('form-forgot').classList.add('hidden');

    if (tabName === 'login') document.getElementById('form-login').classList.remove('hidden');
    if (tabName === 'register') document.getElementById('form-register').classList.remove('hidden');
    if (tabName === 'forgot') document.getElementById('form-forgot').classList.remove('hidden');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    currentUser = { email };

    document.getElementById('auth-btn').textContent = `Hola, ${email.split('@')[0]}`;
    closeAuthModal();
    showNotification(`¡Bienvenido de nuevo, ${email.split('@')[0]}!`, 'success');
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    currentUser = { name, email };

    document.getElementById('auth-btn').textContent = `Hola, ${name.split(' ')[0]}`;
    closeAuthModal();
    showNotification(`¡Cuenta creada para ${name.split(' ')[0]}!`, 'success');
}

function handleForgot(e) {
    e.preventDefault();
    const email = document.getElementById('forgot-email').value;
    showNotification(`Instrucciones enviadas a ${email}`, 'success');
    switchAuthTab('login');
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
});