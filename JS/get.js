const API_URL = 'https://dummyjson.com/products';

window.kosarbaRak = function(id, nev, ar, kep) {
    let kosar = JSON.parse(localStorage.getItem('webshop_kosar')) || [];
    
    const index = kosar.findIndex(item => item.id === id);

    if (index !== -1) {
        kosar[index].mennyiseg += 1;
    } else {
        kosar.push({
            id: id,
            nev: nev,
            ar: ar,
            kep: kep,
            mennyiseg: 1
        });
    }

    localStorage.setItem('webshop_kosar', JSON.stringify(kosar));
    alert(`${nev} hozzáadva a kosárhoz!`);
    
    if (typeof frissitKosarSzamlalo === "function") {
        frissitKosarSzamlalo();
    }
};

window.termekModositasa = function(id) {
    console.log("Módosítandó termék ID:", id);
    
    const modalElement = document.getElementById('editModal');
    if (modalElement) {
        const editModal = new bootstrap.Modal(modalElement);
        
        const idInput = document.getElementById('edit-id');
        if (idInput) idInput.value = id;
        
        editModal.show();
    } else {
        console.error("Nem található az editModal azonosítójú elem!");
    }
};

async function getProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        renderProducts(data.products);
    } catch (error) {
        console.error('Hiba a lekérés során:', error);
        const list = document.getElementById('product-list');
        if (list) {
            list.innerHTML = `<p class="alert alert-danger text-center w-100">Hiba történt a termékek betöltésekor!</p>`;
        }
    }
}

function renderProducts(products) {
    const container = document.getElementById('product-list');
    if (!container) return;
    
    container.innerHTML = '';

    products.forEach(product => {
        const safeTitle = product.title.replace(/'/g, "\\'");
        
        const cardHtml = `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: cover;">
                            
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title h6">${product.title}</h5>
                                
                        <p class="card-text small text-muted">
                            ${product.description.substring(0, 60)}...
                        </p>
                                
                        <div class="mt-auto">
                            <p class="fw-bold mb-2 text-primary">$${product.price}</p>
                                    
                            <button class="btn btn-primary btn-sm w-100 mb-2" 
                                onclick="kosarbaRak(${product.id}, '${safeTitle}', ${product.price}, '${product.thumbnail}')">
                                <i class="bi bi-cart-plus"></i> Kosárba
                            </button>

                            <button class="btn btn-outline-secondary btn-sm w-100" 
                                onclick="termekModositasa(${product.id})">
                                <i class="bi bi-pencil"></i> Módosítás
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
}

getProducts();