// hola.test.js
const holaMundo = require('./hola');

test('debería retornar "Hola, Mundo!"', () => {
    expect(holaMundo()).toBe("Hola, Mundo!");
});
