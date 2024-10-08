const { default: test } = require('node:test');
const addFive = require(`./addFive`);

test('return the numbers plus 5', () => {
    expect(addFive(1)).toBe(6);
});

