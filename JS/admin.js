window.termekModositasa = function(id, title, price, thumbnail, description) {
    const listaNezet = document.getElementById('admin-lista-nezet');
    const urlapNezet = document.getElementById('admin-urlap-nezet');
    
    if (listaNezet && urlapNezet) {
        listaNezet.style.display = 'none';
        urlapNezet.style.display = 'block';

        document.getElementById('form-cim').innerText = "Termék szerkesztése";
        document.getElementById('edit-id').value = id;

        document.getElementById('nev').value = title;
        document.getElementById('ar').value = price;
        document.getElementById('kep').value = thumbnail;
        document.getElementById('leiras').value = description;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

window.kosarbaRak = function(id, nev, ar, kep) {
    let kosar = JSON.parse(localStorage.getItem('webshop_kosar')) || [];
    const index = kosar.findIndex(item => item.id === id);
    if (index !== -1) {
        kosar[index].mennyiseg += 1;
    } else {
        kosar.push({ id, nev, ar, kep, mennyiseg: 1 });
    }
    localStorage.setItem('webshop_kosar', JSON.stringify(kosar));
    alert(`${nev} hozzáadva!`);
};