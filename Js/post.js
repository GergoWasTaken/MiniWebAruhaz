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
        "method": PUT,
        headers: {
            "Content-Type": "application/js"
        }
    }
})
