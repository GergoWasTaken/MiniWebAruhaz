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

const USD_HUF_RATE = 365;

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

function frissitKosar() {
    if (!isBrowser) return;

    const kosar = JSON.parse(localStorage.getItem('webshop_kosar')) || [];
    const kontener = document.getElementById('kosar-elemek');
    if (!kontener) return;

    let osszUSD = 0;
    kontener.innerHTML = '';

    kosar.forEach(item => {
        const sorHuf = Math.round(item.ar * item.mennyiseg * USD_HUF_RATE).toLocaleString('hu-HU');
        osszUSD += (item.ar * item.mennyiseg);
        
        kontener.innerHTML += `
            <tr>
                <td><img src="${item.kep}" width="50"> ${item.nev}</td>
                <td>${Math.round(item.ar * USD_HUF_RATE)} Ft</td>
                <td><input type="number" value="${item.mennyiseg}" min="1" max="99" onchange="valtoztatMennyiseg(${item.id}, this.value)" style="width: 60px;"></td>
                <td class="fw-bold">${sorHuf} Ft</td>
                <td><button class="btn btn-danger btn-sm" onclick="torol(${item.id})">X</button></td>
            </tr>`;
    });

    const vegHuf = Math.round(osszUSD * USD_HUF_RATE).toLocaleString('hu-HU') + ' Ft';
    const reszosszegElem = document.getElementById('reszosszeg');
    const vegosszegElem = document.getElementById('vegosszeg');
    
    if (reszosszegElem) reszosszegElem.innerText = vegHuf;
    if (vegosszegElem) vegosszegElem.innerText = vegHuf;

    const fizetesGomb = document.querySelector('#payment-form button[type="submit"]');
    if (fizetesGomb) fizetesGomb.disabled = kosar.length === 0;

    const uzenet = document.getElementById('kosar-uzenet');
    if (uzenet) uzenet.style.display = kosar.length === 0 ? 'block' : 'none';
}

if (isBrowser) {
    window.torol = (id) => {
        let kosar = JSON.parse(localStorage.getItem('webshop_kosar')) || [];
        kosar = kosar.filter(i => i.id !== id);
        localStorage.setItem('webshop_kosar', JSON.stringify(kosar));
        frissitKosar();
    };

    window.valtoztatMennyiseg = (id, ujMennyiseg) => {
        if (!kosarUtils.validalMennyiseg(ujMennyiseg)) {
            alert("Érvénytelen mennyiség!");
            frissitKosar();
            return;
        }
        let kosar = JSON.parse(localStorage.getItem('webshop_kosar')) || [];
        const index = kosar.findIndex(item => item.id === id);
        if (index !== -1) {
            kosar[index].mennyiseg = parseInt(ujMennyiseg);
            localStorage.setItem('webshop_kosar', JSON.stringify(kosar));
            frissitKosar();
        }
    };

    document.addEventListener('DOMContentLoaded', frissitKosar);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = kosarUtils;
}