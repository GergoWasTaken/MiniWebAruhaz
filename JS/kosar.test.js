const kosarUtils = require('./kosar.js');

describe('Kosár funkciók alapos tesztelése ($)', () => {

    describe('Összegzés (szamolVegosszeg)', () => {
        
        test('Több tétel esetén helyesen adja össze az árakat', () => {
            const tesztKosar = [
                { ar: 872, mennyiseg: 2 },
                { ar: 1396, mennyiseg: 1 }
            ];
            expect(kosarUtils.szamolVegosszeg(tesztKosar)).toBe(3140);
        });

        test('Üres kosár összege pontosan 0$', () => {
            expect(kosarUtils.szamolVegosszeg([])).toBe(0);
        });
    });

    describe('Beviteli ellenőrzés (validalMennyiseg)', () => {

        test('Elutasítja a negatív számokat', () => {
            expect(kosarUtils.validalMennyiseg(-5)).toBe(false);
        });

        test('Elutasítja a nullát (minimum 1 kell)', () => {
            expect(kosarUtils.validalMennyiseg(0)).toBe(false);
        });

        test('Elutasítja a túl nagy rendelést (pl. 100 felett)', () => {
            expect(kosarUtils.validalMennyiseg(150)).toBe(false);
        });

        test('Elutasítja a tört számokat (nem vehet valaki 1.5 telefont)', () => {
            expect(kosarUtils.validalMennyiseg(2.5)).toBe(false);
        });

        test('Elutasítja a véletlen szöveges bevitelt', () => {
            expect(kosarUtils.validalMennyiseg("sok")).toBe(false);
        });

        test('Elfogadja a normális mennyiséget (pl. 3)', () => {
            expect(kosarUtils.validalMennyiseg(3)).toBe(true);
        });
    });
});