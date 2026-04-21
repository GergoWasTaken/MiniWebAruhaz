document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const btnSotet = document.getElementById('sotet');
    const btnVilagos = document.getElementById('vilagos');
    const htmlTag = document.documentElement;

    const btnMegnyit = document.getElementById('termek_hozzaadas');
    const btnVissza = document.getElementById('vissza_a_listahoz');
    const listaNezet = document.getElementById('admin-lista-nezet');
    const urlapNezet = document.getElementById('admin-urlap-nezet');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navMenu.classList.toggle('active');
        });
    }

    if (btnMegnyit && btnVissza) {
        btnMegnyit.addEventListener('click', () => {
            listaNezet.style.display = 'none';
            urlapNezet.style.display = 'block';
        });
        btnVissza.addEventListener('click', () => {
            urlapNezet.style.display = 'none';
            listaNezet.style.display = 'block';
            document.getElementById('product-form').reset();
            document.getElementById('edit-id').value = '';
            document.getElementById('form-cim').innerText = "Új termék létrehozása";
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
        const mentett = localStorage.getItem('theme') || 'light';
        htmlTag.setAttribute('data-bs-theme', mentett);
    }
});