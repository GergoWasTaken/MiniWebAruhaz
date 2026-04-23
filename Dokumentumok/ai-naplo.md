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

