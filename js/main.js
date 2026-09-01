// LISTA GENERAL DE PRODUCTOS
const products = [
    { id: 1, name: "EA SPORTS FC 25", platform: "PS5", price: 45000, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500" },
    { id: 2, name: "Grand Theft Auto V", platform: "PS4", price: 28000, image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500" },
    { id: 3, name: "Cyberpunk 2077", platform: "PC", price: 25000, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500" },
    { id: 4, name: "Spider-Man 2", platform: "PS5", price: 48000, image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500" }
];

let cart = [];
let selectedProductForCart = null;
let currentFilter = 'all';

// CALCULA PRECIOS SEGÚN REGLA GENERAL
function getProductPrices(product) {
    if (product.platform === 'PC') {
        return { primary: product.price, secondary: null };
    }
    // La secundaria se calcula automáticamente con 30% de descuento
    const primaryPrice = product.price;
    const secondaryPrice = Math.round(product.price * 0.70);
    return { primary: primaryPrice, secondary: secondaryPrice };
}

// RENDERIZAR PRODUCTOS Y FILTRADO
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

function renderProducts(filter = 'all') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = filter === 'all' 
        ? products 
        : products.filter(p => p.platform.toUpperCase() === filter.toUpperCase());

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="no-products">No hay juegos disponibles para esta plataforma actualmente.</p>`;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-badge">${product.platform}</div>
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price.toLocaleString('es-AR')} ARS</div>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">Agregar al Carrito</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterProducts(platform, event) {
    if (event) event.preventDefault();
    currentFilter = platform;
    
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');

    renderProducts(platform);
}

// MANEJO DE AGREGAR AL CARRITO CON MODAL DE CUENTA
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const { primary, secondary } = getProductPrices(product);

    if (product.platform === 'PC') {
        pushToCart({
            id: `${product.id}-PC`,
            name: `${product.name} (PC)`,
            price: primary
        });
        return;
    }

    selectedProductForCart = product;
    document.getElementById('account-modal-title').innerText = product.name;
    document.getElementById('primary-price-tag').innerText = `$${primary.toLocaleString('es-AR')} ARS`;
    document.getElementById('secondary-price-tag').innerText = `$${secondary.toLocaleString('es-AR')} ARS`;
    
    document.getElementById('account-type-modal').classList.add('active');
}

function confirmAddToCart(type) {
    if (!selectedProductForCart) return;

    const { primary, secondary } = getProductPrices(selectedProductForCart);
    const chosenPrice = type === 'Primaria' ? primary : secondary;

    pushToCart({
        id: `${selectedProductForCart.id}-${type}`,
        name: `${selectedProductForCart.name} (${type})`,
        price: chosenPrice
    });

    closeAccountModal();
}

function closeAccountModal() {
    document.getElementById('account-type-modal').classList.remove('active');
    selectedProductForCart = null;
}

function pushToCart(item) {
    cart.push(item);
    updateCartUI();
    showToast(`¡${item.name} agregado al carrito!`);
}

// LÓGICA DEL CARRITO Y PAGO
function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const itemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('cart-total-price');

    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p style="text-align:center; color:#8b949e;">El carrito está vacío.</p>';
        totalPriceEl.innerText = '$0 ARS';
        return;
    }

    let total = 0;
    itemsContainer.innerHTML = '';
    cart.forEach((item, index) => {
        total += item.price;
        itemsContainer.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <div style="color: #00f0ff; font-size:0.9rem;">$${item.price.toLocaleString('es-AR')} ARS</div>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#ff4d4d; cursor:pointer;">Quitar</button>
            </div>
        `;
    });

    totalPriceEl.innerText = `$${total.toLocaleString('es-AR')} ARS`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
    document.getElementById('cart-view').classList.remove('hidden');
    document.getElementById('payment-view').classList.add('hidden');
}

function goToPayment() {
    if (cart.length === 0) {
        showToast('Agregá productos al carrito primero.');
        return;
    }
    
    document.getElementById('cart-view').classList.add('hidden');
    document.getElementById('payment-view').classList.remove('hidden');

    // Preparar mensaje de WhatsApp
    const total = cart.reduce((acc, i) => acc + i.price, 0);
    const itemList = cart.map(i => `- ${i.name}`).join('\n');
    const msg = encodeURIComponent(`¡Hola Nexus Games! Adjunto el comprobante de pago por mis juegos:\n\n${itemList}\n\nTotal Transferido: $${total.toLocaleString('es-AR')} ARS`);
    
    // Enlace con número actualizado
    document.getElementById('ws-btn').href = `https://wa.me/5493765036949?text=${msg}`;
}

function backToCart() {
    document.getElementById('payment-view').classList.add('hidden');
    document.getElementById('cart-view').classList.remove('hidden');
}

function copyToClipboard(text, msg) {
    navigator.clipboard.writeText(text);
    showToast(msg);
}

function showToast(text) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = text;
    container.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}