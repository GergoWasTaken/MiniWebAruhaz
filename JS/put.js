document.getElementById("product-list").addEventListener("submit", async (event) => {
    event.preventDefault();

    const adatok = adatKiolvasas();

    try {
        await putHivas(adatok);
        megjelenit("Sikerült a mentés!");
    } catch (hiba) {
        megjelenit("Hiba: " + hiba.message);
    }
});

function adatKiolvasas() {
    return {
        name: document.getElementById("nev").value,
        row: parseInt(document.getElementById("row").value),
        column: parseInt(document.getElementById("column").value),
        active: document.getElementById("active").checked
    };
}

async function putHivas(adat) {
    const id = 1;

    const csomag = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adat)
    };

    const valasz = await fetch(`https://dummyjson.com/products/${id}`, csomag);

    if (!valasz.ok) {
        throw new Error("Szerver hiba történt");
    }

    const keszadat = await valasz.json();
    console.log("Szerver:", keszadat);
}

