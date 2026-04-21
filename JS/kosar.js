const USD_HUF_RATE = 365;

function frissitKosar() {
    const kosar = JSON.parse(localStorage.getItem('webshop_kosar')) || [];
    const kontener = document.getElementById('kosar-elemek');
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
    if (reszosszegElem) reszosszegElem.innerText = vegHuf;
    document.getElementById('vegosszeg').innerText = vegHuf;

    const fizetesGomb = document.querySelector('#payment-form button[type="submit"]');
    if (fizetesGomb) {
        fizetesGomb.disabled = kosar.length === 0;
    }

    const uzenet = document.getElementById('kosar-uzenet');
    if (uzenet) {
        uzenet.style.display = kosar.length === 0 ? 'block' : 'none';
    }
}

window.torol = (id) => {
    let kosar = JSON.parse(localStorage.getItem('webshop_kosar')) || [];
    kosar = kosar.filter(i => i.id !== id);
    localStorage.setItem('webshop_kosar', JSON.stringify(kosar));
    frissitKosar();
};

window.valtoztatMennyiseg = (id, ujMennyiseg) => {
    let kosar = JSON.parse(localStorage.getItem('webshop_kosar')) || [];
    const index = kosar.findIndex(item => item.id === id);
    if (index !== -1) {
        kosar[index].mennyiseg = parseInt(ujMennyiseg);
        if (kosar[index].mennyiseg <= 0) {
            kosar.splice(index, 1);
        }
        localStorage.setItem('webshop_kosar', JSON.stringify(kosar));
        frissitKosar();
    }
};

frissitKosar();
