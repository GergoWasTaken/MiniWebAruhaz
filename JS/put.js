document.getElementById('product-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('edit-id').value;
    const data = {
        title: document.getElementById('nev').value,
        price: parseFloat(document.getElementById('ar').value),
        description: document.getElementById('leiras').value,
        thumbnail: document.getElementById('kep').value
    };

    if (id) {
        fetch(`https://dummyjson.com/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            alert(`Sikeres módosítás: ${res.title}`);
            location.reload();
        });
    } else {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            alert(`Sikeres hozzáadás: ${res.title}`);
            location.reload();
        });
    }
});