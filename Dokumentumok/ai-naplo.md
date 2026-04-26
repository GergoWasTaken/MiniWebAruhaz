N.Domi:
1. Bejegyzés
Dátum: 2026.04.20
Prompt: Melyik paranccsal kell lefuttatni a jest teszteket?
AI válasz: A Jest tesztek futtatása attól függ, hogyan van beállítva a projekted, de a leggyakoribb parancsok: Ha npm-et használsz: npm test
Mit tanultam: Megértettem hogyan kell lefuttatni az npm teszteket.
Hol implementáltam: Terminálba.

Cs.Levi:
1. Bejegyzés
Dátum: 2026.04.20
Prompt: admin.html,  mit kéne meghivnom a putban hogy tudjam melyik elemet akarom modositani? (ne mondd el az egész kódot csak egy kis segitséget adj!)
AI válasz: A PUT kérésnél két dolgot kell tenned, hogy az API tudja, melyik terméket kell felülírnia:

Olvasd ki az ID-t: A mentés gomb megnyomásakor a JavaScripttel kérd le ennek a rejtett mezőnek az értékét (például: document.getElementById('edit-id').value).

Fűzd hozzá az URL-hez: A REST API-k általában elvárják, hogy az azonosító az URL végén szerepeljen.
Valahogy így képzeld el a fetch hívásod elejét:
(és egy kép az alap felépitésről)

Mit tanultam: egy másik put api felépitést 
Hol implementáltam: put.js.

M.Geri:
1. Bejegyzes
Datum: 2026.04.13
Prompt: Magyarazd el rovid, hogy hogyan mukodik a github rendszerben a branch es azt, hogy hogyan kell ezt VS Code-ban hasznalni.
AI valasz:
A Branch lényege
A branch (ág) egy párhuzamos munkaterület. Lehetővé teszi, hogy úgy fejlessz új funkciókat, hogy közben a fő kódod (main) érintetlen és működőképes marad. Ha kész vagy, az ágat „beolvasztod” (merge) a főágba.

Használat VS Code-ban (Lépések)
Létrehozás: Kattints a bal alsó sarokban a main feliratra → Create new branch → Adj neki nevet.

Fejlesztés: Írd meg a kódot, majd a bal oldali Source Control (ágas ikon) fülön Commitold a változásokat.

Feltöltés: Kattints a Publish Branch gombra, hogy az ág felkerüljön GitHubra.

Váltás: Ha másik ágon dolgoznál, kattints megint a bal alsó sarokban az ág nevére, és válaszd ki a listából a másikat.

Összefűzés: A GitHub weboldalán a Pull Request gombbal tudod az ágad tartalmát véglegesen a main-be másolni.

Aranyszabály: Soha ne dolgozz közvetlenül a main ágon, ha valami újat próbálsz ki!
Mit tanultam: Hogyan mukodik a branch github-on, illetve VS code-ban es, hogy hogyan kell uj branch-et letrehozni es azt, hogy hogyan kell merge-elni 2 branch-et.
Hol implementáltam: Github-on, illetve VS code-ban.

2. Bejegyzes
Datum: 2026.04.15
Prompt: Hogyan tudok egy apirol meghivott "termeket" elmenteni majd egy masik weboldalon a "kosarban" megjeleniteni? roviden ird le.
AI valasz:
1. Adat kinyerése és mentése (Local Storage)
Amikor az API-ról megérkezik a termék és a felhasználó a "Kosárba" gombra kattint, mentsd el az adatokat a böngésző LocalStorage-ába. Ez azért jó, mert az adatok az oldalfrissítés vagy oldalváltás után is megmaradnak.

JavaScript
// Példa mentésre
const termek = { id: 1, nev: "Cipő", ar: 15000 };
localStorage.setItem('kosar', JSON.stringify(termek));
2. Kommunikáció az oldalak között
Mivel a két weboldal (vagy aloldal) ugyanazt a domaint használja, a második oldal is hozzá fog férni ugyanahhoz a localStorage kulcshoz.

3. Megjelenítés a kosár oldalon
A másik oldalon (kosár) töltsd be az adatokat, alakítsd vissza objektummá, és jelenítsd meg a HTML-ben.

JavaScript
// Példa betöltésre a másik oldalon
const mentettKosar = JSON.parse(localStorage.getItem('kosar'));

if (mentettKosar) {
    document.getElementById('kosar-tartalom').innerText = `${mentettKosar.nev} - ${mentettKosar.ar} Ft`;
}
Pro tipp: Ha több terméket akarsz tárolni, ne egy objektumot, hanem egy tömböt ments el, és minden gombnyomásnál add hozzá az új elemet a meglévő listához.
Mit tanultam: LocalStorage-be elmenteni egy valtozot es azt kesobb mashol felhasznalni.
Hol implementaltam: get.js-ben az elmentest, kosar.js-ben a betoltest.
