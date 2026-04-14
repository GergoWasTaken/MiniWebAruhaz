const szerver = document.getElementById("szervermegvan")
document.getElementById("urlap").addEventListener("submit", async (e) => {
    e.preventDefault()
    const nev = document.getElementById("nev").value
    const ar = document.getElementById("ar").value
    const leiras = document.getElementById("leiras").value
    const kep = document.getElementById("kep").value

    const adat = {
        "nev": nev,
        "ar": ar,
        "leiras": leiras,
        "kep": kep
    };

    const csomag = {
        "method": "POST",
        headers: {
            "Content-Type": "application/js"
        },
        body: JSON.stringify(adat)
    };

    try{
        const szervervalasz = await fetch("https://dummyjson.com/products/add", csomag);
        const eredmeny = szervervalasz.json()
        if (szervervalasz.ok) {
            console.log("sikeres rögzítés")
            alert("Sikeresen rögzítette a terméket")
        }
        else{
            console.log("Sikertelen rögzítés")
            alert("Sikertelen rögzítés")
        }
        
    }
    catch(error){
        document.getElementById("eredmenyhely").textContent = "Hiba történt"+ error.message;
    }

})
