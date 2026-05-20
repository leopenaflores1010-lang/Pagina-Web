/* ========================================
   VELOCITY RACING - JAVASCRIPT
   Funcionalidades interactivas y dinámicas
   ======================================== */

// ==================== BASE DE DATOS DE MOTOS ====================
// Ordenar las motos alfabéticamente por nombre para un orden consistente
const bikesDatabase = [
    // Categoría 600cc
    {
        id: 'viper-600',
        name: 'Viper 600',
        displacement: '600',
        power: '120 HP',
        maxSpeed: '240 km/h',
        acceleration: '4.2s',
        price: 12999,
        image: 'https://images.unsplash.com/photo-1517957754643-914fff5fd57a?auto=format&fit=crop&w=1000&q=80',
        description: 'La Viper 600 es perfecta para pilotos que buscan emoción sin sacrificar control. Con su motor V2 optimizado y peso mínimo, ofrece una experiencia de pilotaje ágil y responsiva.',
        features: ['Motor V2 600cc', 'Inyección directa', 'Sistema ABS', 'Frenos de disco simple', 'Suspensión regulable']
    },
    {
        id: 'phantom-600r',
        name: 'Phantom 600R',
        displacement: '600',
        power: '130 HP',
        maxSpeed: '255 km/h',
        acceleration: '4.0s',
        price: 14499,
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
        description: 'La Phantom 600R lleva la experiencia de 600cc al siguiente nivel con tecnología de carrera profesional. Diseñada para circuito y calle.',
        features: ['Motor V2 Turbo 600cc', 'Control de tracción', 'Frenos Brembo carbón', 'Suspensión ajustable', 'Electrónica avanzada']
    },
    {
        id: 'yzh-r6-2018',
        name: 'YZH R6 2018',
        displacement: '600',
        power: '145 HP',
        maxSpeed: '270 km/h',
        acceleration: '3.5s',
        price: 18499,
        image: 'https://p.turbosquid.com/ts-thumb/0v/c272DM/5sgNyFrG/yamaha_yzf_r6_2017_0000/jpg/1515490190/1920x1080/fit_q87/cf73c5459f6c5fcd8cb184ff08e5dc4146a5c0df/yamaha_yzf_r6_2017_0000.jpg',
        description: 'YZH R6 2018 es una deportiva ágil para circuito y carretera, diseñada para pilotos que buscan velocidad y control extremo.',
        features: ['Motor 600cc de alto rendimiento', 'Frenos de disco dual', 'Suspensión deportiva', 'Control de tracción', 'Diseño aerodinámico']
    },
    {
        id: 'rebel-600',
        name: 'Rebel 600',
        displacement: '600',
        power: '115 HP',
        maxSpeed: '230 km/h',
        acceleration: '4.5s',
        price: 11999,
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
        description: 'La Rebel 600 es la opción ideal para principiantes amateurs que buscan entrar en el mundo de las motos deportivas con estilo.',
        features: ['Motor V2 600cc', 'ABS estándar', 'Inyección de combustible', 'Suspensión básica', 'Sistema de enfriamiento eficiente']
    },

    // Categoría 750cc
    {
        id: 'shadow-750r',
        name: 'Shadow 750R',
        displacement: '750',
        power: '145 HP',
        maxSpeed: '270 km/h',
        acceleration: '3.5s',
        price: 18499,
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400',
        description: 'Shadow 750R es la moto de los campeones de circuito. Combina potencia bruta con maniobrabilidad extrema. Ideal para pilotos intermedios y avanzados.',
        features: ['Motor V3 750cc Turbo', 'Control de tracción multinivel', 'Frenos Brembo carbón', 'Suspensión Öhlins regulable', 'Telemía en tiempo real']
    },
    {
        id: 'eclipse-750',
        name: 'Eclipse 750',
        displacement: '750',
        power: '140 HP',
        maxSpeed: '260 km/h',
        acceleration: '3.7s',
        price: 17299,
        image: 'https://images.unsplash.com/photo-1518546375768-b4d8b44a2932?auto=format&fit=crop&w=1000&q=80',
        description: 'Eclipse 750 es versatilidad pura. Perfecta para carretera y circuito, ofrece el equilibrio perfecto entre potencia y control.',
        features: ['Motor V3 750cc', 'ABS adaptativo', 'Inyección de precisión', 'Suspensión semi-activa', 'GPS integrado']
    },
    {
        id: 'inferno-750x',
        name: 'Inferno 750X',
        displacement: '750',
        power: '155 HP',
        maxSpeed: '280 km/h',
        acceleration: '3.3s',
        price: 19999,
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
        description: 'Inferno 750X es el pico de la categoría 750. Con sistema de refrigeración de última generación y motor de carrera, domina cualquier circuito.',
        features: ['Motor V3 750cc Supercargado', 'Control de tracción avanzado', 'Frenos Brembo de carbón dual', 'Suspensión Öhlins activa', 'Pantalla táctil LCD']
    },

    // Categoría 1000cc+
    {
        id: 'apex-1000r',
        name: 'Apex 1000R',
        displacement: '1000',
        power: '200 HP',
        maxSpeed: '310 km/h',
        acceleration: '3.0s',
        price: 26499,
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
        description: 'Apex 1000R es la alternativa moderna y eficiente en la categoría 1000. Híbrida, conectada y extremadamente potente.',
        features: ['Motor V4 1000cc Híbrido', 'Control de tracción adaptativo', 'Frenos Brembo cerámico', 'Suspensión Öhlins semi-activa', 'GPS navegación premium', 'Navegador de pistas']
    },
    {
        id: 'nexus-1100',
        name: 'Nexus 1100',
        displacement: '1000',
        power: '225 HP',
        maxSpeed: '325 km/h',
        acceleration: '2.7s',
        price: 32999,
        image: 'https://images.unsplash.com/photo-1515588594510-0f8c5f21bee4?auto=format&fit=crop&w=1000&q=80',
        description: 'Nexus 1100 es la vanguardia tecnológica. La moto del futuro con sistemas de conducción autónoma asistida y IA integrada.',
        features: ['Motor V4 1100cc Turbo híbrido', 'IA para optimización de conducción', 'Control de tracción de 12 niveles', 'Frenos de última generación', 'Suspensión Öhlins con IA', 'Sistema de navegación predictiva', 'Pantalla holográfica']
    },
    {
        id: 'thunder-1200',
        name: 'Thunder 1200',
        displacement: '1000',
        power: '240 HP',
        maxSpeed: '330 km/h',
        acceleration: '2.6s',
        price: 35999,
        image: 'https://images.unsplash.com/photo-1515275233538-117d3e8c8b19?w=400',
        description: 'Thunder 1200 es la moto más poderosa del catálogo. Con motor V4 de 1200cc y 240 HP, es el vehículo de los auténticos profesionales.',
        features: ['Motor V4 1200cc Supercargado', 'Sistema de control de tracción de 9 niveles', 'Frenos Brembo de carbón dual activos', 'Suspensión Öhlins totalmente electrónica', 'Pantalla AMOLED táctil', 'Carga inalámbrica', 'Modo de circuito profesional']
    },
    {
        id: 'blade-950',
        name: 'Blade 950',
        displacement: '950',
        power: '170 HP',
        maxSpeed: '295 km/h',
        acceleration: '3.2s',
        price: 23999,
        image: 'https://images.unsplash.com/photo-1470123808288-1946c170e7c2?w=400',
        description: 'Blade 950 combina elegancia y potencia para un rendimiento equilibrado en carretera y pista.',
        features: ['Motor V4 950cc', 'Sistema de frenos ABS', 'Suspensión electrónica', 'Control de tracción', 'Pantalla digital']
    },
    {
        id: 'specter-850',
        name: 'Specter 850',
        displacement: '850',
        power: '165 HP',
        maxSpeed: '290 km/h',
        acceleration: '3.4s',
        price: 21499,
        image: 'https://images.unsplash.com/photo-1512499617640-c2f999040740?w=400',
        description: 'Specter 850 ofrece un diseño agresivo con un motor potente y un comportamiento ágil en curvas.',
        features: ['Motor V2 850cc', 'ABS avanzado', 'Interfaz táctil', 'Frenos de disco dual', 'Modo pista']
    },
    {
        id: 'storm-1000x',
        name: 'Storm 1000X',
        displacement: '1000',
        power: '220 HP',
        maxSpeed: '325 km/h',
        acceleration: '2.7s',
        price: 30999,
        image: 'https://images.unsplash.com/photo-1498575207494-35f6d2339b94?w=400',
        description: 'Storm 1000X es la referencia en velocidad extrema y diseño futurista para pilotos exigentes.',
        features: ['Motor V4 1000cc Turbo', 'Control de tracción inteligente', 'Suspensión activa', 'Frenos carbono', 'Pantalla HUD']
    },
    {
        id: 'vr1-1000',
        name: 'V-R1 1000',
        displacement: '1000',
        power: '210 HP',
        maxSpeed: '320 km/h',
        acceleration: '2.8s',
        price: 28999,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        description: 'V-R1 1000 es la máquina de competición definitiva. Ganadora de múltiples campeonatos, es el sueño de todo piloto profesional.',
        features: ['Motor V4 1000cc Turbo', 'Control de tracción multinivel avanzado', 'Frenos Brembo de carbón cerámico', 'Suspensión Öhlins electrónica', 'Conectividad Bluetooth 5.0', 'Sistema de frenado regenerativo']
    }
].sort((a, b) => a.name.localeCompare(b.name));

function createCatalogItems() {
    const templates = [
        { id: 'raptor-1000', name: 'Raptor 1000', category: 'Moto', displacement: '1000', power: '210 HP', maxSpeed: '320 km/h', acceleration: '2.8s', price: 33999, image: 'https://images.unsplash.com/photo-1517957754643-914fff5fd57a?auto=format&fit=crop&w=1000&q=80', description: 'Deportiva de alto rendimiento para pilotos exigentes.', features: ['Chasis ligero', 'Frenos ABS', 'Suspensión deportiva'] },
        { id: 'phantom-600r', name: 'Phantom 600R', category: 'Moto', displacement: '600', power: '145 HP', maxSpeed: '270 km/h', acceleration: '3.5s', price: 14499, image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80', description: 'Máquina de circuito y calle con prestaciones premium.', features: ['Control de tracción', 'ABS avanzado', 'Diseño aerodinámico'] },
        { id: 'thunder-1200', name: 'Thunder 1200', category: 'Moto', displacement: '1200', power: '240 HP', maxSpeed: '330 km/h', acceleration: '2.6s', price: 35999, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80', description: 'Velocidad extrema con acabado de competición.', features: ['Motor V4', 'Frenos Brembo', 'Suspensión Öhlins'] },
        { id: 'blade-950', name: 'Blade 950', category: 'Moto', displacement: '950', power: '170 HP', maxSpeed: '295 km/h', acceleration: '3.2s', price: 23999, image: 'https://images.unsplash.com/photo-1470123808288-1946c170e7c2?auto=format&fit=crop&w=1000&q=80', description: 'Equilibrio perfecto entre potencia y control.', features: ['Chasis rígido', 'Frenos de disco dual', 'Control de tracción'] },
        { id: 'specter-850', name: 'Specter 850', category: 'Moto', displacement: '850', power: '165 HP', maxSpeed: '290 km/h', acceleration: '3.4s', price: 21499, image: 'https://images.unsplash.com/photo-1512499617640-c2f999040740?auto=format&fit=crop&w=1000&q=80', description: 'Diseño agresivo y comportamiento ágil en curvas.', features: ['ABS avanzado', 'Interfaz táctil', 'Modo pista'] },
        { id: 'storm-1000x', name: 'Storm 1000X', category: 'Moto', displacement: '1000', power: '220 HP', maxSpeed: '325 km/h', acceleration: '2.7s', price: 30999, image: 'https://images.unsplash.com/photo-1498575207494-35f6d2339b94?auto=format&fit=crop&w=1000&q=80', description: 'Máquina de alta potencia con diseño futurista.', features: ['Motor V4 turbo', 'Suspensión activa', 'Frenos de carbono'] },
        { id: 'apex-1000r', name: 'Apex 1000R', category: 'Moto', displacement: '1000', power: '200 HP', maxSpeed: '310 km/h', acceleration: '3.0s', price: 26499, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80', description: 'Tecnología híbrida con rendimiento de pista.', features: ['Motor híbrido', 'Pantalla AMOLED', 'Control de tracción adaptativo'] },
        { id: 'nexus-1100', name: 'Nexus 1100', category: 'Moto', displacement: '1100', power: '225 HP', maxSpeed: '325 km/h', acceleration: '2.7s', price: 32999, image: 'https://images.unsplash.com/photo-1515588594510-0f8c5f21bee4?auto=format&fit=crop&w=1000&q=80', description: 'Tecnología de vanguardia y asistentes inteligentes.', features: ['Conducción asistida', 'Suspensión electrónica', 'Interfaz inteligente'] },
        { id: 'rebel-600', name: 'Rebel 600', category: 'Moto', displacement: '600', power: '115 HP', maxSpeed: '230 km/h', acceleration: '4.5s', price: 11999, image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1000&q=80', description: 'Ideal para principiantes con estilo deportivo.', features: ['ABS estándar', 'Inyección de combustible', 'Suspensión básica'] },
        { id: 'viper-600', name: 'Viper 600', category: 'Moto', displacement: '600', power: '120 HP', maxSpeed: '240 km/h', acceleration: '4.2s', price: 12999, image: 'https://images.unsplash.com/photo-1518546375768-b4d8b44a2932?auto=format&fit=crop&w=1000&q=80', description: 'Moto ágil de circuito urbano con rendimiento sólido.', features: ['Motor V2', 'Frenos de disco', 'Suspensión ajustable'] },
        { id: 'velocity-edge-helmet', name: 'Velocity Edge', category: 'Casco', displacement: 'N/A', power: 'N/A', maxSpeed: 'N/A', acceleration: 'N/A', price: 299, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80', description: 'Casco de competición con protección avanzada.', features: ['Visor polarizado', 'Acolchado térmico', 'Ventilación superior'] },
        { id: 'chain-guard-pro', name: 'Chain Guard Pro', category: 'Cadena', displacement: 'N/A', power: 'N/A', maxSpeed: 'N/A', acceleration: 'N/A', price: 159, image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1000&q=80', description: 'Cadena reforzada para seguridad máxima.', features: ['Material antirralladuras', 'Cierre blindado', 'Cobertura resistente'] },
        { id: 'raptor-carbon-helmet', name: 'Raptor Carbon', category: 'Casco', displacement: 'N/A', power: 'N/A', maxSpeed: 'N/A', acceleration: 'N/A', price: 269, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80', description: 'Casco aerodinámico de carbono con alto nivel de protección.', features: ['Visor anti-rasguños', 'Ventilación activa', 'Forro removible'] },
        { id: 'velocity-pro-helmet', name: 'Velocity Pro', category: 'Casco', displacement: 'N/A', power: 'N/A', maxSpeed: 'N/A', acceleration: 'N/A', price: 339, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80', description: 'Casco premium con diseño de pista y seguridad integral.', features: ['Certificación DOT', 'Material compuesto', 'Acolchado reforzado'] },
        { id: 'nitro-grip-gloves', name: 'Guantes Nitro Grip', category: 'Seguridad', displacement: 'N/A', power: 'N/A', maxSpeed: 'N/A', acceleration: 'N/A', price: 79, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80', description: 'Guantes con agarre avanzado y protección ergonómica.', features: ['Reforzamiento en nudillos', 'Material anti-deslizante', 'Cierre velcro'] },
        { id: 'titan-lock-chain', name: 'Titan Lock', category: 'Cadena', displacement: 'N/A', power: 'N/A', maxSpeed: 'N/A', acceleration: 'N/A', price: 129, image: 'https://images.unsplash.com/photo-1519838264283-e3c627faa37b?auto=format&fit=crop&w=1000&q=80', description: 'Cadena de seguridad con recubrimiento resistente a cortes.', features: ['Cerradura antirrobo', 'Malla de acero', 'Cubierta protectora'] },
        { id: 'shield-pro-vest', name: 'Chaleco Shield Pro', category: 'Seguridad', displacement: 'N/A', power: 'N/A', maxSpeed: 'N/A', acceleration: 'N/A', price: 189, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80', description: 'Chaleco protector con ventilación y estructura ligera.', features: ['Protección de espalda', 'Paneles ventilados', 'Cinturón ajustable'] },
        { id: 'track-beam-light', name: 'Luz LED Track Beam', category: 'Accesorio', displacement: 'N/A', power: 'N/A', maxSpeed: 'N/A', acceleration: 'N/A', price: 59, image: 'https://images.unsplash.com/photo-1510107585606-161f6fe8a30c?auto=format&fit=crop&w=1000&q=80', description: 'Luz LED para máxima visibilidad nocturna.', features: ['Modo alto brillo', 'Resistente al agua', 'Instalación rápida'] },
        { id: 'road-guard-sensor', name: 'Sensor Road Guard', category: 'Seguridad', displacement: 'N/A', power: 'N/A', maxSpeed: 'N/A', acceleration: 'N/A', price: 149, image: 'https://images.unsplash.com/photo-1519741496077-1bfd6d566db8?auto=format&fit=crop&w=1000&q=80', description: 'Sensor inteligente de proximidad para motos.', features: ['Alerta sonora', 'Conectividad Bluetooth', 'Fácil montaje'] },
        { id: 'total-protection-kit', name: 'Kit Protección Total', category: 'Seguridad', displacement: 'N/A', power: 'N/A', maxSpeed: 'N/A', acceleration: 'N/A', price: 399, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80', description: 'Pack completo de casco, guantes y protecciones.', features: ['Cobertura completa', 'Material ligero', 'Diseño ergonómico'] }
    ];

    const items = [];
    templates.forEach((template) => {
        const variants = template.category === 'Moto' ? 7 : template.category === 'Casco' ? 4 : template.category === 'Cadena' ? 4 : template.category === 'Seguridad' ? 4 : 3;
        for (let i = 1; i <= variants; i++) {
            items.push({
                ...template,
                id: `${template.id}-${i}`,
                name: i === 1 ? template.name : `${template.name} ${i}`,
                price: template.price + (i - 1) * Math.round(template.price * 0.04),
                image: template.image
            });
        }
    });

    return items.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 18);
}

// ==================== ELEMENTOS DEL DOM ====================
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const carousel = document.getElementById('carousel');
const catalogGrid = document.getElementById('catalogGrid');
const navbar = document.getElementById('navbar');
const detailsModal = document.getElementById('detailsModal');
const particlesContainer = document.getElementById('particles');

const catalogItems = createCatalogItems();
let filteredCatalogItems = [...catalogItems];

// ==================== VARIABLES GLOBALES ====================
let currentSlide = 0;

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    initCarousel();
    loadCatalog();
    createParticles();
    initScrollReveal();
    updateScrollButton();
});

// ==================== MENÚ HAMBURGUESA ====================
function initHamburger() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ==================== CARRUSEL ====================
function initCarousel() {
    updateCarousel();
    createCarouselIndicators();
    window.addEventListener('resize', updateCarousel);
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    if (!items.length) return;

    const carouselStyle = getComputedStyle(carousel);
    const gap = parseFloat(carouselStyle.gap) || 0;
    const itemWidth = items[0].getBoundingClientRect().width + gap;

    carousel.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
    
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide - 1 + items.length) % items.length;
    updateCarousel();
}

function createCarouselIndicators() {
    const items = document.querySelectorAll('.carousel-item');
    const indicatorsContainer = document.getElementById('indicators');
    indicatorsContainer.innerHTML = '';
    
    items.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator' + (index === 0 ? ' active' : '');
        indicator.onclick = () => {
            currentSlide = index;
            updateCarousel();
        };
        indicatorsContainer.appendChild(indicator);
    });
}

// Auto-rotación del carrusel
let carouselInterval;

function startCarouselInterval() {
    stopCarouselInterval();
    carouselInterval = setInterval(nextSlide, 5000);
}

function stopCarouselInterval() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

startCarouselInterval();

document.querySelector('.carousel-container')?.addEventListener('mouseenter', stopCarouselInterval);
document.querySelector('.carousel-container')?.addEventListener('mouseleave', startCarouselInterval);

// ==================== CATÁLOGO ====================
function loadCatalog() {
    renderCatalog(filteredCatalogItems);
}

function renderCatalog(items) {
    catalogGrid.innerHTML = '';
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'catalog-bike-card';
        card.innerHTML = `
            <div class="catalog-bike-image">
                <img src="${item.image}" alt="${item.name}">
                <span class="catalog-item-tag">${item.category}</span>
            </div>
            <div class="catalog-bike-details">
                <h3 class="catalog-bike-name">${item.name}</h3>
                <p class="catalog-bike-category">${item.description}</p>
                <div class="catalog-bike-spec">
                    <span>Potencia:</span>
                    <span>${item.power}</span>
                </div>
                <div class="catalog-bike-spec">
                    <span>V.Máx:</span>
                    <span>${item.maxSpeed}</span>
                </div>
                <div class="catalog-bike-spec">
                    <span>0-100:</span>
                    <span>${item.acceleration}</span>
                </div>
                <div class="catalog-bike-price">$${item.price.toLocaleString()}</div>
                <button class="btn-details" onclick="openModal('${item.id}')">Ver Detalles</button>
            </div>
        `;
        
        catalogGrid.appendChild(card);
    });
    
    // Animar tarjetas al cargar
    document.querySelectorAll('.catalog-bike-card').forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.03}s both`;
    });
}

function filterCatalog() {
    const category = document.getElementById('filterCategory').value;
    const displacement = document.getElementById('filterDisplacement').value;
    const price = document.getElementById('filterPrice').value;
    
    filteredCatalogItems = catalogItems.filter(item => {
        const matchCategory = !category || item.category === category;
        const matchDisplacement = !displacement || item.displacement === displacement;
        const matchPrice = !price || item.price <= parseInt(price);
        return matchCategory && matchDisplacement && matchPrice;
    });
    
    renderCatalog(filteredCatalogItems);
}

function resetFilters() {
    document.getElementById('filterCategory').value = '';
    document.getElementById('filterDisplacement').value = '';
    document.getElementById('filterPrice').value = '';
    filteredCatalogItems = [...catalogItems];
    renderCatalog(filteredCatalogItems);
}

// ==================== MODAL ====================
function openModal(itemId) {
    const item = catalogItems.find(b => b.id === itemId) || bikesDatabase.find(b => b.id === itemId);
    if (!item) return;
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-bike-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <h2 class="modal-bike-name">${item.name}</h2>
        <p class="modal-bike-category" style="margin-bottom:16px; color: #00ff88; letter-spacing: 1px; text-transform: uppercase;">${item.category}</p>
        
        <div class="modal-bike-specs">
            <div class="modal-spec">
                <div class="modal-spec-label">Potencia</div>
                <div class="modal-spec-value">${item.power}</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Velocidad Máx.</div>
                <div class="modal-spec-value">${item.maxSpeed}</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">0-100 km/h</div>
                <div class="modal-spec-value">${item.acceleration}</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Cilindrada</div>
                <div class="modal-spec-value">${item.displacement}</div>
            </div>
        </div>
        
        <p class="modal-description">${item.description}</p>
        
        <div style="margin-bottom: 20px;">
            <h3 style="color: #0088ff; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 2px;">Características Clave:</h3>
            <ul style="list-style: none; padding: 0;">
                ${item.features.map(feature => `
                    <li style="padding: 8px 0; color: #4a4a4a; border-bottom: 1px solid #4a4a4a;">
                        ✓ ${feature}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div style="background: rgba(255, 0, 51, 0.1); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <div style="color: #4a4a4a; margin-bottom: 10px; text-transform: uppercase; font-size: 12px;">Precio</div>
            <div style="font-family: 'Orbitron', sans-serif; font-size: 28px; color: #00ff88; font-weight: 700; text-shadow: 0 0 20px rgba(0, 255, 136, 0.5);">
                $${item.price.toLocaleString()}
            </div>
        </div>
        
        <button class="modal-button" onclick="alert('¡Gracias por tu interés en ' + '${item.name}' + '! Pronto disponible para compra.')">
            Comprar Ahora
        </button>
    `;
    
    detailsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    detailsModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera
detailsModal.addEventListener('click', (e) => {
    if (e.target === detailsModal) {
        closeModal();
    }
});

// Cerrar modal con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ==================== PARTICULAS EN HERO ====================
function createParticles() {
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 2 + 2;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        particlesContainer.appendChild(particle);
    }
}

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section-header, .feature-card, .testimonial-card, .about-text').forEach(el => {
        observer.observe(el);
    });
}

// ==================== SCROLL SUAVE ====================
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== NAVBAR STICKY ====================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(255, 0, 51, 0.3)';
    } else {
        navbar.style.boxShadow = '0 0 20px rgba(255, 0, 51, 0.5)';
    }
});

// ==================== VIDEO MODAL ====================
function playVideo() {
    const videoModal = document.getElementById('videoModal');
    const heroVideo = document.getElementById('heroVideo');

    if (heroVideo) {
        heroVideo.src = 'video/video1.mp4';
        heroVideo.play().catch(() => {});
    }

    if (videoModal) {
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const heroVideo = document.getElementById('heroVideo');

    if (heroVideo) {
        heroVideo.pause();
        heroVideo.src = '';
    }

    if (videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ==================== ACTUALIZAR BOTÓN SCROLL ====================
function updateScrollButton() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }
}

// ==================== EFECTOS DE MOUSEMOVE (PARALLAX) ====================
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.5;
        particle.style.transform = `translate(${x * speed * 10}px, ${y * speed * 10}px)`;
    });
});

// ==================== FORMULARIO NEWSLETTER ====================
const newsletterBtn = document.querySelector('.newsletter-btn');
if (newsletterBtn) {
    newsletterBtn.addEventListener('click', () => {
        const input = document.querySelector('.newsletter-input');
        if (input.value.includes('@')) {
            alert('✓ ¡Te has suscrito exitosamente a VELOCITY RACING NEWS!');
            input.value = '';
        } else {
            alert('Por favor ingresa un correo válido.');
        }
    });
}

// Permitir Enter en newsletter
document.querySelector('.newsletter-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.querySelector('.newsletter-btn').click();
    }
});

// ==================== SOPORTE PARA TECLADO ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// ==================== ANIMACIÓN DE CARGA ====================
window.addEventListener('load', () => {
    document.body.style.animation = 'fadeIn 0.5s ease-out';
});

// ==================== FUNCIONES AUXILIARES ====================

// Función para contar números animados (si es necesario)
function animateNumber(element, target, duration = 1000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Verificación de navegador
function checkBrowserSupport() {
    const features = {
        css_grid: CSS.supports('display', 'grid'),
        css_flexbox: CSS.supports('display', 'flex'),
        css_custom_properties: CSS.supports('--test', '0'),
    };
    
    console.log('Características de navegador soportadas:', features);
}

checkBrowserSupport();

// ==================== MODO DESARROLLO ====================
// Descomenta para ver información de depuración
// console.log('Base de datos de motos cargada:', bikesDatabase);
// console.log('Catálogo inicial:', filteredBikes);
