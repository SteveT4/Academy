const Math = require('./math');

test('adds 1 + 2 to equal 3', () => {
    expect(Math(1, 2)).toBe(3);
});