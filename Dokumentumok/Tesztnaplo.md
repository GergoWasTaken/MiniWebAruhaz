Teszteset ID	Funkció	            Tesztelt eset leírása	        Bemenet (Input)	                        Elvárt eredmény	Állapot
TJ-01	        szamolVegosszeg	    Normál kosár kalkuláció	        [{ar: 100, m: 2}, {ar: 50, m: 1}]	    250	            ✅ ÁTMENT
TJ-02	        szamolVegosszeg	    Üres kosár kezelése	            []	                                    0	            ✅ ÁTMENT
TJ-03	        szamolVegosszeg	    Tizedesjegyek kerekítése	    [{ar: 19.99, m: 1}, {ar: 5.5, m: 2}]	30.99	        ✅ ÁTMENT
TJ-04	        validalMennyiseg	Negatív szám elutasítása	    -5	                                    false	        ✅ ÁTMENT
TJ-05	        validalMennyiseg	Nulla elutasítása	            0	                                    false	        ✅ ÁTMENT
TJ-06	        validalMennyiseg	Felső határérték ellenőrzése	101	                                    false	        ✅ ÁTMENT
TJ-07	        validalMennyiseg	Tört szám elutasítása	        2.5	                                    false	        ✅ ÁTMENT
TJ-08	        validalMennyiseg	Nem numerikus karakterek	    "szöveg"	                            false	        ✅ ÁTMENT
TJ-09	        validalMennyiseg	Érvényes egész szám	            3                                       true	        ✅ ÁTMENT

Környezet: Node.js, Jest framework.
Futtatas módja: npm test parancs kiadása a terminálban.