document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const btnMegnyit = document.getElementById('termek_hozzaadas');
    const btnVissza = document.getElementById('vissza_a_listahoz');
    const listaNezet = document.getElementById('admin-lista-nezet');
    const urlapNezet = document.getElementById('admin-urlap-nezet');
    const btnSotet = document.getElementById('sotet');
    const btnVilagos = document.getElementById('vilagos');
    const htmlTag = document.documentElement;

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navMenu.classList.toggle('active');
        });
    }

    if (btnMegnyit && btnVissza) {
        btnMegnyit.addEventListener('click', () => {
            if (listaNezet) listaNezet.style.display = 'none';
            if (urlapNezet) urlapNezet.style.display = 'block';
        });
        btnVissza.addEventListener('click', () => {
            if (urlapNezet) urlapNezet.style.display = 'none';
            if (listaNezet) listaNezet.style.display = 'block';
            const form = document.getElementById('product-form');
            if (form) form.reset();
        });
    }

    if (btnSotet && btnVilagos) {
        btnSotet.addEventListener('click', () => {
            htmlTag.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        });
        btnVilagos.addEventListener('click', () => {
            htmlTag.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        });
        const mentettTheme = localStorage.getItem('theme');
        if (mentettTheme) {
            htmlTag.setAttribute('data-bs-theme', mentettTheme);
        }
    }
});