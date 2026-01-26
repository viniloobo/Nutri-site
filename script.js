// Inicialização de Ícones
lucide.createIcons();

// Lógica de Navegação (SPA)
function navigateTo(pageId) {
    document.querySelectorAll('.section-fade').forEach(section => {
        section.classList.remove('active');
    });

    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.classList.add('active');
    }

    updateNavActive(pageId);

    document.getElementById('mobile-menu').classList.add('hidden');

    window.scrollTo(0, 0);
}

function updateNavActive(pageId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('nav-active');

        const existingUnderline = link.querySelector('.nav-underline');
        if (existingUnderline) existingUnderline.remove();

        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('nav-active');
            const underline = document.createElement('span');
            underline.className = 'nav-underline';
            link.appendChild(underline);
        }
    });
}

// Menu Mobile
function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// Navbar Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
        nav.classList.add('bg-white/90', 'backdrop-blur-lg', 'py-2', 'shadow-sm');
        nav.classList.remove('bg-transparent', 'py-1');
    } else {
        nav.classList.remove('bg-white/90', 'backdrop-blur-lg', 'py-2', 'shadow-sm');
        nav.classList.add('bg-transparent', 'py-1');
    }
});

// Página inicial
window.onload = () => {
    navigateTo('home');
};
