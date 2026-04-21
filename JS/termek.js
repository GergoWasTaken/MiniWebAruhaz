const gomb = document.getElementById("termek_hozzaadas");
const visszaGomb = document.getElementById("vissza_termekekhez");

if (gomb) {
    gomb.addEventListener("click", function() {
        const termekek = document.getElementsByClassName("termekek");
        const hozzaadas = document.getElementById("hozzaadas");
        if (termekek[0]) termekek[0].style.display = "none";
        if (hozzaadas) hozzaadas.style.display = "block";
        if (visszaGomb) visszaGomb.style.display = "block";
        gomb.style.display = "none";
    });
}

if (visszaGomb) {
    visszaGomb.addEventListener("click", function() {
        const termekek = document.getElementsByClassName("termekek");
        const hozzaadas = document.getElementById("hozzaadas");
        if (termekek[0]) termekek[0].style.display = "block";
        if (hozzaadas) hozzaadas.style.display = "none";
        if (visszaGomb) visszaGomb.style.display = "none";
        if (gomb) gomb.style.display = "block";
    });
}
