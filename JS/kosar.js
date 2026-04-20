const kosarUtils = {
    szamolVegosszeg: function(kosarLista) {
        if (!kosarLista || kosarLista.length === 0) return 0;
        const osszeg = kosarLista.reduce((total, termek) => {
            return total + (termek.ar * termek.mennyiseg);
        }, 0);
        return Math.round(osszeg * 100) / 100;
    },

    validalMennyiseg: function(mennyiseg) {
        const szam = Number(mennyiseg);
        if (isNaN(szam) || !Number.isInteger(szam)) return false;
        if (szam < 1 || szam > 100) return false;
        return true;
    }
};

let kosar = [];
if (typeof localStorage !== 'undefined') {
    kosar = JSON.parse(localStorage.getItem('webshop_kosar')) || [
        { id: 1, nev: "Smartphone Pro", ar: 899, mennyiseg: 1, kep: "https://via.placeholder.com/50" },
        { id: 2, nev: "Wireless Earbuds", ar: 149, mennyiseg: 2, kep: "https://via.placeholder.com/50" }
    ];
}

const kosarContainer = typeof document !== 'undefined' ? document.getElementById("kosar-elemek") : null;


function kosarFrissites() {
    if (!kosarContainer) return;

    kosarContainer.innerHTML = "";
    const osszesen = kosarUtils.szamolVegosszeg(kosar);

    if (kosar.length === 0) {
        kosarContainer.innerHTML = `
            <tr>
                <td colspan="5" class="text-center py-5 text-muted">
                    A kosarad üres.
                </td>
            </tr>`;
    } else {
        kosar.forEach((termek, index) => {
            const sorOsszeg = termek.ar * termek.mennyiseg;
            kosarContainer.innerHTML += `
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <img src="${termek.kep}" class="rounded me-3" width="50" alt="${termek.nev}">
                            <span class="fw-bold">${termek.nev}</span>
                        </div>
                    </td>
                    <td>$${termek.ar.toLocaleString()}</td>
                    <td>
                        <input type="number" 
                               class="form-control form-control-sm w-50" 
                               value="${termek.mennyiseg}" 
                               onchange="mennyisegModositas(${index}, this.value)">
                    </td>
                    <td class="fw-bold">$${sorOsszeg.toLocaleString()}</td>
                    <td>
                        <button class="btn btn-outline-danger btn-sm" onclick="termekTorles(${index})">
                            Törlés
                        </button>
                    </td>
                </tr>`;
        });
    }

    const reszosszegElem = document.getElementById("reszosszeg");
    const vegosszegElem = document.getElementById("vegosszeg");
    
    if (reszosszegElem) reszosszegElem.innerText = "$" + osszesen.toLocaleString();
    if (vegosszegElem) vegosszegElem.innerText = "$" + osszesen.toLocaleString();
    
    mentesLocalStorage();
}

function mennyisegModositas(index, ujErtek) {
    if (!kosarUtils.validalMennyiseg(ujErtek)) {
        if (typeof alert !== 'undefined') alert("Érvénytelen mennyiség! (1-100 közötti egész számot adj meg)");
        kosarFrissites();
        return;
    }

    kosar[index].mennyiseg = parseInt(ujErtek);
    kosarFrissites();
}

function termekTorles(index) {
    const megerosites = typeof confirm !== 'undefined' ? confirm("Biztosan el szeretnéd távolítani ezt a terméket?") : true;
    if (megerosites) {
        kosar.splice(index, 1);
        kosarFrissites();
    }
}

function mentesLocalStorage() {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('webshop_kosar', JSON.stringify(kosar));
    }
}

if (typeof document !== 'undefined') {
    document.getElementById("fizetes-gomb")?.addEventListener("click", () => {
        if (kosar.length > 0) {
            alert("Átirányítás a fizetési oldalra...");
        } else {
            alert("A kosarad üres!");
        }
    });

    document.addEventListener("DOMContentLoaded", kosarFrissites);
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = kosarUtils;
}