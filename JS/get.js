const API_URL = 'https://dummyjson.com/products';

async function getProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
                
        renderProducts(data.products);
    } catch (error) {
        console.error('Hiba:', error);
        document.getElementById('product-list').innerHTML = `
            <div class="col-12 text-center">
                <p class="alert alert-danger">Nem sikerült betölteni a termékeket!</p>
            </div>`;
    }
}

function renderProducts(products) {
    const container = document.getElementById('product-list');
    container.innerHTML = '';

    products.forEach(product => {
        const cardHtml = `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                            
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title h6">${product.title}</h5>
                                
                        <p class="card-text small text-muted description-text">
                            ${product.description}
                        </p>
                                
                        <div class="mt-auto">
                            <p class="fw-bold mb-2 text-primary">${product.price} $</p>
                                    
                            <button class="btn btn-outline-primary btn-sm w-100" onclick="alert('${product.title} a kosárba került!')">
                                Kosárba
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