// LISTA GENERAL DE PRODUCTOS CON INFORMACIÓN DETALLADA
const products = [
    // COMBOS Y OFERTAS
    { 
        id: 101, 
        name: "Mortal Kombat 11 + Injustice 2", 
        platform: "Combos", 
        price: 24500, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/header.jpg",
        description: {
            intro: "Obtené dos de los mejores títulos de lucha de NetherRealm Studios en un solo paquete definitivo.",
            features: [
                "Lucha con plantillas completas de superhéroes y luchadores icónicos.",
                "Modos historia cinematográficos y combate online altamente competitivo.",
                "Sistemas de personalización de personajes y equipamiento."
            ],
            synopsis: "Disfruta de batallas épicas cruzando el universo de Mortal Kombat con el de DC Comics, dominando variaciones de combate únicas y cinemáticas de alta calidad.",
            specs: {
                developer: "NetherRealm Studios",
                publisher: "Warner Bros. Interactive",
                platforms: "PS4, PS5",
                release: "2019",
                rating: "Mature 17+",
                modes: "Un jugador / Multijugador"
            }
        }
    },
    { 
        id: 102, 
        name: "Sniper Ghost Warrior Contracts 2", 
        platform: "Ofertas", 
        price: 18500, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1338770/header.jpg",
        description: {
            intro: "Conviértete en un francotirador de elite en el shooter táctico más exigente ambientado en Oriente Medio.",
            features: [
                "Eliminación de objetivos a distancias extremas superiores a 1000 metros.",
                "Campaña táctica con sigilo realista y balística mejorada.",
                "Misiones highly rejugables con múltiples formas de abordaje."
            ],
            synopsis: "En el papel de Raven, un francotirador a sueldo, deberás completar contratos tácticos en zonas de conflicto sin ley para derrocar un régimen criminal.",
            specs: {
                developer: "CI Games",
                publisher: "CI Games",
                platforms: "PS4, PS5",
                release: "4 de junio de 2021",
                rating: "Mature 17+",
                modes: "Un jugador"
            }
        }
    },

    // JUEGOS PS4
    { 
        id: 10, 
        name: "Alan Wake Remastered", 
        platform: "PS4", 
        price: 20000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108710/header.jpg",
        description: {
            intro: "Sumérgete en el thriller psicológico Alan Wake Remastered, disponible para PlayStation 4 y PlayStation 5.",
            features: [
                "Experiencia completa: Disfruta del juego base junto con las expansiones 'The Signal' y 'The Writer'.",
                "Gráficos mejorados: Visuales remasterizados en 4K que realzan los detalles y la ambientación del juego.",
                "Historia envolvente: Narrativa episódica llena de giros inesperados combinando acción y suspense."
            ],
            synopsis: "Alan Wake, un escritor de novelas de suspense, se embarca en una búsqueda desesperada para encontrar a su esposa Alice en Bright Falls.",
            specs: {
                developer: "Remedy Entertainment",
                publisher: "Epic Games Publishing",
                platforms: "PlayStation 4, PlayStation 5",
                release: "5 de octubre de 2021",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 1, 
        name: "112 Operator", 
        platform: "PS4", 
        price: 38000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1083830/header.jpg",
        description: {
            intro: "Gestiona los servicios de emergencia de cualquier ciudad del mundo respondiendo a llamadas y enviando recursos.",
            features: [
                "Mapas reales basados en datos de OpenStreetMap.",
                "Efectos meteorológicos dinámicos y situaciones de desastre a gran escala.",
                "Gestión detallada de unidades de rescate y equipamiento especial."
            ],
            synopsis: "Asume el rol de despachador de emergencias a nivel global. Atiende incidentes en tiempo real y asigna recursos estratégicamente.",
            specs: {
                developer: "Jutsu Games",
                publisher: "Games Operators",
                platforms: "PlayStation 4",
                release: "23 de abril de 2020",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 2, 
        name: "911 Operator", 
        platform: "PS4", 
        price: 27000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/503560/header.jpg",
        description: {
            intro: "Ponte los auriculares de un telefonista del 911 y toma decisiones de vida o muerte en segundos.",
            features: [
                "Más de 50 ciudades reales para jugar alrededor del mundo.",
                "Cientos de llamadas y reportes médicos o policiales únicos.",
                "Modo Carrera y Modo Libre."
            ],
            synopsis: "Administra llamadas de auxilio reales respondiendo de manera precisa para enviar asistencia según la urgencia.",
            specs: {
                developer: "Jutsu Games",
                publisher: "PlayWay S.A.",
                platforms: "PlayStation 4",
                release: "24 de febrero de 2017",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 3, 
        name: "A Plague Tale: Innocence", 
        platform: "PS4", 
        price: 8500, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/752590/header.jpg",
        description: {
            intro: "Acompaña a Amicia y su hermano Hugo en un viaje desgarrador a través de la Francia del siglo XIV asolada por la peste.",
            features: [
                "Mecánicas de sigilo, resolución de puzles con fuego y supervivencia.",
                "Hordas impresionantes de ratas en pantalla.",
                "Narrativa conmovedora ganadora de múltiples premios."
            ],
            synopsis: "Perseguidos por la Inquisición y rodeados de enjambres de ratas, los hermanos deberán sobrevivir apoyándose mutuamente.",
            specs: {
                developer: "Asobo Studio",
                publisher: "Focus Home Interactive",
                platforms: "PlayStation 4, PlayStation 5",
                release: "14 de mayo de 2019",
                rating: "Mature 17+",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 4, 
        name: "A Way Out", 
        platform: "PS4", 
        price: 14000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg",
        description: {
            intro: "Una aventura exclusivamente cooperativa diseñada para jugarse de a dos personas en pantalla dividida o en línea.",
            features: [
                "Experiencia de juego 100% cooperativa.",
                "Nivel de acción variado con persecuciones, tiroteos y puzles.",
                "Pase de amigos para invitar a un compañero gratis."
            ],
            synopsis: "Leo y Vincent, dos prisioneros desconocidos, deben forjar una alianza arriesgada para escapar de la cárcel.",
            specs: {
                developer: "Hazelight Studios",
                publisher: "Electronic Arts",
                platforms: "PlayStation 4",
                release: "23 de marzo de 2018",
                rating: "Mature 17+",
                modes: "Cooperativo (2 jugadores)"
            }
        }
    },
    { 
        id: 5, 
        name: "Ace Combat 7: Skies Unknown", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/502500/header.jpg",
        description: {
            intro: "Ponte a los mandos de los cazas de combate más avanzados del mundo y domina los cielos.",
            features: [
                "Gráficos fotorrealistas impulsados por Unreal Engine 4.",
                "Clima dinámico que afecta el comportamiento de los aviones.",
                "Amplia selección de cazas modernos y armas personalizables."
            ],
            synopsis: "Forma parte del escuadrón de élite y completa misiones en el aire esquivando misiles y nubes de tormenta.",
            specs: {
                developer: "Bandai Namco Studios",
                publisher: "Bandai Namco Entertainment",
                platforms: "PlayStation 4",
                release: "18 de enero de 2019",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador / Multijugador"
            }
        }
    },
    { 
        id: 6, 
        name: "Agony", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/487720/header.jpg",
        description: {
            intro: "Un survival horror en primera persona ambientado en las profundidades más perturbadoras del Infierno.",
            features: [
                "Exploración de un inframundo grotesco y peligroso.",
                "Habilidad especial para poseer almas y demonios de menor rango.",
                "Fuerte enfoque en la atmósfera, el sigilo y la supervivencia."
            ],
            synopsis: "Eres un alma atormentada sin recuerdos de su pasado que intenta escapar del infierno.",
            specs: {
                developer: "Madmind Studio",
                publisher: "PlayWay S.A.",
                platforms: "PlayStation 4",
                release: "29 de mayo de 2018",
                rating: "Mature 17+",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 7, 
        name: "Air Conflicts Pacific Carriers", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214910/header.jpg",
        description: {
            intro: "Simulador de combate aéreo basado en las batallas navales del Océano Pacífico.",
            features: [
                "Campañas para la Armada de EE.UU. o la Armada Imperial Japonesa.",
                "Gestión y mando sobre portaaviones enteros.",
                "Aviones históricos detallados con armamento realista."
            ],
            synopsis: "Revive batallas históricas como Midway y Pearl Harbor comandando escuadrones aéreos de combate.",
            specs: {
                developer: "Games Farm",
                publisher: "Kalypso Media",
                platforms: "PlayStation 4",
                release: "25 de septiembre de 2015",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador / Multijugador"
            }
        }
    },
    { 
        id: 8, 
        name: "Air Conflicts Secret Wars", 
        platform: "PS4", 
        price: 9000, 
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/85400/header.jpg",
        description: {
            intro: "Vuela en misiones encubiertas y operaciones secretas a través de las dos Guerras Mundiales.",
            features: [
                "Más de 49 misiones con objetivos variados.",
                "Modos de control Arcade y Simulación.",
                "Más de 16 aeronaves de época detalladas."
            ],
            synopsis: "Ponte en la piel de Dorothy 'Dee' Derbec, una piloto contratada para misiones clandestinas.",
            specs: {
                developer: "Games Farm",
                publisher: "bitComposer Games",
                platforms: "PlayStation 4",
                release: "18 de julio de 2011",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador / Multijugador"
            }
        }
    },
    { 
        id: 9, 
        name: "Air Conflicts Vietnam", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/236870/header.jpg",
        description: {
            intro: "Pilota helicópteros de combate y aviones a reacción durante la Guerra de Vietnam.",
            features: [
                "Inclusión de helicópteros armados con ametralladoras y misiles.",
                "Banda sonora inspirada en el rock de los años 60.",
                "Escuadrones intercambiables durante la acción."
            ],
            synopsis: "Controla a Joe Thompson, un piloto de las Fuerzas Aéreas de los EE.UU., piloteando misiones de escolta y ataque.",
            specs: {
                developer: "Games Farm",
                publisher: "bitComposer Games",
                platforms: "PlayStation 4",
                release: "2 de octubre de 2013",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador / Multijugador"
            }
        }
    },
    { 
        id: 11, 
        name: "Alien Isolation: The Collection", 
        platform: "PS4", 
        price: 46000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/header.jpg",
        description: {
            intro: "La edición definitiva del aclamado survival horror, que incluye todos los DLCs.",
            features: [
                "Incluye las misiones extra con la tripulación original de Nostromo.",
                "IA enemiga adaptativa que aprende de tus hábitos.",
                "Atmósfera claustrofóbica fidedigna a la película de 1979."
            ],
            synopsis: "15 años después de la desaparición de la nave Nostromo, Amanda Ripley viaja a la estación Sevastopol.",
            specs: {
                developer: "Creative Assembly",
                publisher: "SEGA",
                platforms: "PlayStation 4",
                release: "7 de octubre de 2014",
                rating: "Mature 17+",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 12, 
        name: "Alien: Isolation", 
        platform: "PS4", 
        price: 14000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/header.jpg",
        description: {
            intro: "Descubre el verdadero significado del miedo en un juego de supervivencia en primera persona.",
            features: [
                "Supervivencia pura: busca recursos y fabrica herramientas.",
                "Enfréntate a un Xenomorfo impredecible.",
                "Diseño visual y sonoro idéntico a la obra cinematográfica original."
            ],
            synopsis: "Amanda Ripley deberá usar su ingenio para sobrevivir a una estación espacial en ruinas.",
            specs: {
                developer: "Creative Assembly",
                publisher: "SEGA",
                platforms: "PlayStation 4",
                release: "7 de octubre de 2014",
                rating: "Mature 17+",
                modes: "Un jugador"
            }
        }
    }
];

let cart = [];
let currentFilter = 'all';
let currentDetailProduct = null;
let selectedAccountType = 'Primaria';

// CALCULA PRECIOS SEGÚN REGLA GENERAL
function getProductPrices(product) {
    if (product.platform === 'PC' || product.platform.includes('PS Plus') || product.platform === 'Pre-Venta' || product.platform === 'Combos' || product.platform === 'Ofertas') {
        return { primary: product.price, secondary: null };
    }
    const primaryPrice = product.price;
    const secondaryPrice = Math.round(product.price * 0.70);
    return { primary: primaryPrice, secondary: secondaryPrice };
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// RENDERIZAR PRODUCTOS Y TARJETAS
function renderProducts(filter = 'all', searchTerm = '') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = products.filter(p => {
        const matchesCategory = filter === 'all' || p.platform.toLowerCase() === filter.toLowerCase();
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
        return matchesCategory && matchesSearch;
    });

    const titleEl = document.getElementById('section-title');
    if (titleEl) {
        if (searchTerm.trim() !== '') {
            titleEl.innerText = `Resultados para "${searchTerm}"`;
        } else {
            titleEl.innerText = filter === 'all' ? 'Catálogo Destacado' : `Categoría: ${filter}`;
        }
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="no-products">No se encontraron productos que coincidan con tu búsqueda.</p>`;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-badge">${product.platform}</div>
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="openProductDetail(${product.id})" style="cursor:pointer;" loading="lazy" referrerpolicy="no-referrer">
            <div class="product-info">
                <h3 class="product-title" onclick="openProductDetail(${product.id})" style="cursor:pointer;">${product.name}</h3>
                <div class="product-price">$${product.price.toLocaleString('es-AR')} ARS</div>
                <button class="btn-add-cart" onclick="openProductDetail(${product.id})">Ver Opciones / Comprar</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// BÚSQUEDA Y FILTRADO
function filterProductsBySearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value : '';
    renderProducts(currentFilter, searchTerm);
}

function filterProducts(category, event) {
    if (event) event.preventDefault();
    if (category === 'PC') return;

    currentFilter = category;
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    renderProducts(category, '');
}

// MODAL DE DETALLE DEL PRODUCTO
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentDetailProduct = product;
    selectedAccountType = 'Primaria';

    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-badge').innerText = product.platform;
    document.getElementById('detail-title').innerText = product.name;

    const prices = getProductPrices(product);
    const selectorContainer = document.getElementById('account-selector-container');

    if (prices.secondary === null) {
        if (selectorContainer) selectorContainer.style.display = 'none';
        document.getElementById('detail-price').innerText = `$${prices.primary.toLocaleString('es-AR')} ARS`;
    } else {
        if (selectorContainer) selectorContainer.style.display = 'flex';
        const primaryRadio = document.querySelector('input[name="accountType"][value="Primaria"]');
        if (primaryRadio) primaryRadio.checked = true;
        updateDetailPrice('Primaria');
    }

    // Insertar Descripción y características
    const descContainer = document.getElementById('detail-description-container');
    if (descContainer && product.description) {
        let featuresHTML = '';
        if (product.description.features) {
            featuresHTML = `<ul>${product.description.features.map(f => `<li>${f}</li>`).join('')}</ul>`;
        }

        descContainer.innerHTML = `
            <p class="desc-intro" style="margin-top:15px; color:#c9d1d9;">${product.description.intro || ''}</p>
            ${featuresHTML}
            <p class="desc-synopsis" style="margin-top:10px; font-style:italic; color:#8b949e;">${product.description.synopsis || ''}</p>
        `;
    }

    const modal = document.getElementById('product-detail-modal');
    if (modal) {
        modal.classList.add('active');
        modal.classList.remove('hidden');
    }
}

function updateDetailPrice(type) {
    selectedAccountType = type;
    if (!currentDetailProduct) return;
    const prices = getProductPrices(currentDetailProduct);
    const selectedPrice = type === 'Primaria' ? prices.primary : prices.secondary;
    document.getElementById('detail-price').innerText = `$${selectedPrice.toLocaleString('es-AR')} ARS`;
}

function closeProductDetail() {
    const modal = document.getElementById('product-detail-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function addFromDetail() {
    if (!currentDetailProduct) return;

    const prices = getProductPrices(currentDetailProduct);
    const isSinglePrice = prices.secondary === null;
    const finalType = isSinglePrice ? 'Única' : selectedAccountType;
    const finalPrice = isSinglePrice ? prices.primary : (selectedAccountType === 'Primaria' ? prices.primary : prices.secondary);

    cart.push({
        id: currentDetailProduct.id,
        name: currentDetailProduct.name,
        platform: currentDetailProduct.platform,
        accountType: finalType,
        price: finalPrice
    });

    updateCartUI();
    closeProductDetail();
    showToast(`"${currentDetailProduct.name}" agregado al carrito`);
}

// MANEJO DEL CARRITO
function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    if (!modal) return;
    const isVisible = modal.classList.contains('active');
    
    if (isVisible) {
        modal.classList.remove('active');
    } else {
        modal.classList.add('active');
        modal.classList.remove('hidden');
        backToCart();
    }
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    const itemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total-price');

    if (countEl) countEl.innerText = cart.length;

    if (!itemsEl) return;
    itemsEl.innerHTML = '';

    let total = 0;

    if (cart.length === 0) {
        itemsEl.innerHTML = `<p style="text-align:center; color:#8b949e; padding: 20px 0;">El carrito está vacío.</p>`;
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div>
                    <strong style="display:block; color:#f0f6fc;">${item.name}</strong>
                    <span style="font-size:0.85rem; color:#8b949e;">${item.platform} ${item.accountType !== 'Única' ? `(${item.accountType})` : ''}</span>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="color:#2ea043; font-weight:bold;">$${item.price.toLocaleString('es-AR')}</span>
                    <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#f85149; cursor:pointer; font-weight:bold;">✕</button>
                </div>
            `;
            itemsEl.appendChild(itemDiv);
        });
    }

    if (totalEl) totalEl.innerText = `$${total.toLocaleString('es-AR')} ARS`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function goToPayment() {
    if (cart.length === 0) {
        showToast('El carrito está vacío');
        return;
    }

    document.getElementById('cart-view').classList.add('hidden');
    document.getElementById('payment-view').classList.remove('hidden');

    const total = cart.reduce((acc, i) => acc + i.price, 0);
    let message = `¡Hola Nexus Games! Quisiera realizar la compra de:\n`;
    cart.forEach(item => {
        message += `- ${item.name} [${item.platform}] (${item.accountType}): $${item.price.toLocaleString('es-AR')} ARS\n`;
    });
    message += `\nTotal: $${total.toLocaleString('es-AR')} ARS\nAdjunto comprobante de pago.`;

    const encodedMsg = encodeURIComponent(message);
    const wsBtn = document.getElementById('ws-btn');
    if (wsBtn) wsBtn.href = `https://wa.me/5493765036949?text=${encodedMsg}`;
}

function backToCart() {
    const cartView = document.getElementById('cart-view');
    const paymentView = document.getElementById('payment-view');
    if (cartView) cartView.classList.remove('hidden');
    if (paymentView) paymentView.classList.add('hidden');
}

function copyToClipboard(text, msg) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(msg);
    });
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}