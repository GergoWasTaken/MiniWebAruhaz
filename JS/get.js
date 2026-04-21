const API_URL = 'https://dummyjson.com/products';
const ARFOLYAM = 350;

window.kosarbaRak = function(id, nev, ar, kep) {
    let kosar = JSON.parse(localStorage.getItem('webshop_kosar')) || [];
    const index = kosar.findIndex(item => item.id === id);

    if (index !== -1) {
        kosar[index].mennyiseg += 1;
    } else {
        kosar.push({ id, nev, ar, kep, mennyiseg: 1 });
    }

    localStorage.setItem('webshop_kosar', JSON.stringify(kosar));
    function fancyAlert(msg, duration = 3000) {
        if (!document.getElementById('fancy-alert-style')) {
            const style = document.createElement('style');
            style.id = 'fancy-alert-style';
            style.innerHTML = `
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translate(-50%, -60%); }
                    10% { opacity: 1; transform: translate(-50%, -50%); }
                    90% { opacity: 1; transform: translate(-50%, -50%); }
                    100% { opacity: 0; transform: translate(-50%, -40%); }
                }
                .custom-alert {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(255, 255, 255, 0.95);
                    color: #333;
                    padding: 20px 40px;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                    font-family: 'Segoe UI', Roboto, sans-serif;
                    font-weight: 500;
                    z-index: 10000;
                    border: 1px solid #eee;
                    text-align: center;
                    min-width: 250px;
                    animation: fadeInOut ${duration}ms ease-in-out forwards;
                    backdrop-filter: blur(5px);
                }
            `;
            document.head.appendChild(style);
        }

        const alertBox = document.createElement("div");
        alertBox.className = "custom-alert";
        alertBox.innerHTML = msg;
        
        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.remove();
        }, duration);
    }

    fancyAlert("Termék hozzáadva a kosárhoz!");
};

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
            list.innerHTML = `<p class="alert alert-danger text-center w-100">Hiba történt!</p>`;
        }
    }
}

function renderProducts(products) {
    const container = document.getElementById('product-list');
    if (!container) return;
    
    container.innerHTML = '';

    const isAdminPage = window.location.pathname.includes('admin.html');

    products.forEach(product => {
        const safeTitle = product.title.replace(/'/g, "\\'");
        const safeDesc = product.description.replace(/'/g, "\\'");

        const forintAr = product.price * ARFOLYAM;
        let kerekitett;
        const tizedes = forintAr - Math.floor(forintAr);
        if (tizedes === 0.5) {
            kerekitett = Math.floor(forintAr);
        } else {
            kerekitett = Math.round(forintAr);
        }

        let actionButton = "";
        if (isAdminPage) {
            actionButton = `
                <button class="btn btn-warning btn-sm w-100" 
                    onclick="termekModositasa(${product.id}, '${safeTitle}', ${product.price}, '${product.thumbnail}', '${safeDesc}')">
                    Módosítás
                </button>`;
        } else {
            actionButton = `
                <button class="btn btn-primary btn-sm w-100" 
                    onclick="kosarbaRak(${product.id}, '${safeTitle}', ${product.price}, '${product.thumbnail}')">
                    Kosárba
                </button>`;
        }

        const cardHtml = `
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title h6">${product.title}</h5>
                        <p class="card-text small text-muted">
                            ${product.description.substring(0, 60)}...
                        </p>
                        <div class="mt-auto">
                            <p class="fw-bold mb-2 text-primary">${kerekitett} Ft</p>
                            ${actionButton}
                        </div>
                    </div>
                </div>
            </div>`;
        container.innerHTML += cardHtml;
    });
}

getProducts();