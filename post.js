const szerver = document.getElementById("szervermegvan")

document.getElementById("urlap").addEventListener("submit", async (e) => {
    e.preventDefault()
    let helyes = true
    const nev = document.getElementById("nev").value
    const arak = document.getElementById("ar").value
    const leiras = document.getElementById("leiras").value
    const kep = document.getElementById("kep").value

    const adat = {
        "nev": nev,
        "ar": arak,
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
    if (nev == "" || arak == "" || leiras == "" ) {
        alert("Töltse ki az összes mezőt")
        helyes = false
    }
    try{
        const szervervalasz = await fetch("https://dummyjson.com/products/add", csomag);
        const eredmeny = szervervalasz.json()
        if (helyes == true) {
            console.log(nev,arak,leiras, kep)
            alert("Sikeresen rögzítette a terméket")
        }
        else{
            console.log("Sikertelen rögzítés")
        }
        
    }
    catch(error){
        document.getElementById("eredmenyhely").textContent = "Hiba történt"+ error.message;
    }

})