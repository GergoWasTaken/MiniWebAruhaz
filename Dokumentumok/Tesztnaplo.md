Teszteset ID	Funkció	            Tesztelt eset leírása	        Bemenet (Input)	                        Elvárt eredmény	    Állapot
TJ-01	        szamolVegosszeg	    Normál kosár kalkuláció	        [{ar: 872, m: 2}, {ar: 1396, m: 1}]	    3140	            ✅ ÁTMENT
TJ-02	        szamolVegosszeg	    Üres kosár kezelése	            []	                                    0	                ✅ ÁTMENT
TJ-03	        validalMennyiseg	Negatív szám elutasítása	    -5	                                    false	            ✅ ÁTMENT
TJ-04	        validalMennyiseg	Nulla elutasítása	            0	                                    false	            ✅ ÁTMENT
TJ-05	        validalMennyiseg	Felső határérték ellenőrzése	101	                                    false	            ✅ ÁTMENT
TJ-06	        validalMennyiseg	Tört szám elutasítása	        2.5	                                    false	            ✅ ÁTMENT
TJ-07	        validalMennyiseg	Nem numerikus karakterek	    "szöveg"	                            false	            ✅ ÁTMENT
TJ-08	        validalMennyiseg	Érvényes egész szám	            3                                       true	            ✅ ÁTMENT

Környezet: Node.js, Jest framework.
Futtatas módja: npm test parancs kiadása a terminálban.