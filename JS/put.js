document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('edit-id').value;
    const productData = {
        title: document.getElementById('nev').value,
        price: parseFloat(document.getElementById('ar').value),
        description: document.getElementById('leiras').value,
        thumbnail: document.getElementById('kep').value
    };

    if (id) {
        updateProduct(id, productData);
    } else {
        console.log("Új termék felvétele funkció (POST)...");
    }
});

function updateProduct(id, data) {
    fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) throw new Error("Hiba a módosítás során!");
        return res.json();
    })
    .then(updatedProduct => {
        console.log("Sikeres módosítás:", updatedProduct);
        alert(`A(z) ${updatedProduct.title} termék sikeresen frissítve!`);

        document.getElementById('admin-urlap-nezet').style.display = 'none';
        document.getElementById('admin-lista-nezet').style.display = 'block';
        
    })
    .catch(err => {
        console.error("Hiba:", err);
        alert("Nem sikerült a módosítás!");
    });
}

function fillFormForEdit(product) {
    document.getElementById('admin-lista-nezet').style.display = 'none';
    document.getElementById('admin-urlap-nezet').style.display = 'block';
    
    document.getElementById('form-cim').innerText = "Termék szerkesztése";
    document.getElementById('edit-id').value = product.id;
    document.getElementById('nev').value = product.title;
    document.getElementById('ar').value = product.price;
    document.getElementById('kep').value = product.thumbnail;
    document.getElementById('leiras').value = product.description;
}
