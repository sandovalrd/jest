describe('Pruebas', () => {
    describe('Suma', () => {
        it('Suma de 2 numeros', () => {
            const suma = (a, b) => { return a + b }
            expect(suma(2, 1)).toEqual(3)
        });
    });
});