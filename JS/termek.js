const gomb = document.getElementById("termek_hozzaadas");
const visszaGomb = document.getElementById("vissza_termekekhez");

gomb.addEventListener("click", function() { 
    const termekek = document.getElementsByClassName("termekek");
    const hozzaadas = document.getElementById("hozzaadas");
    termekek[0].style.display = "none";
    hozzaadas.style.display = "block";
    vissza_termekekhez.style.display = "block";
    gomb.style.display = "none";
});

visszaGomb.addEventListener("click", function() {
    const termekek = document.getElementsByClassName("termekek");
    const hozzaadas = document.getElementById("hozzaadas");
    termekek[0].style.display = "block";
    hozzaadas.style.display = "none";
    vissza_termekekhez.style.display = "none";
    gomb.style.display = "block";
});