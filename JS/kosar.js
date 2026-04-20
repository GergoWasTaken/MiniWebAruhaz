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
                <td>${item.mennyiseg} db</td>
                <td class="fw-bold">${sorHuf} Ft</td>
                <td><button class="btn btn-danger btn-sm" onclick="torol(${item.id})">X</button></td>
            </tr>`;
    });

    const vegHuf = Math.round(osszUSD * USD_HUF_RATE).toLocaleString('hu-HU') + " Ft";
    document.getElementById('reszosszeg').innerText = vegHuf;
    document.getElementById('vegosszeg').innerText = vegHuf;
}

window.torol = (id) => {
    let kosar = JSON.parse(localStorage.getItem('webshop_kosar')) || [];
    kosar = kosar.filter(i => i.id !== id);
    localStorage.setItem('webshop_kosar', JSON.stringify(kosar));
    frissitKosar();
};

frissitKosar();