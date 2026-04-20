const sotet = document.getElementById('sotet');
const elem = document.documentElement;

function SotetValt(theme) {
    sotet.innerHTML = theme === 'light' ? '🌙' : '☀️';
}
const mentett = localStorage.getItem('theme') || 'light';
elem.setAttribute('data-bs-theme', mentett);
SotetValt(mentett);

sotet.addEventListener('click', () => {
    const mostani = elem.getAttribute('data-bs-theme');
    const uj = mostani === 'light' ? 'dark' : 'light';
    
    elem.setAttribute('data-bs-theme', uj);
    localStorage.setItem('theme', uj);
    SotetValt(uj);
});