const maxProfit = require('./maxProfit');

test('case 1: prices = [7,1,5,3,6,4] output = 5', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5);
});

test('case 2: prices = [7,6,4,3,1] output = 0', () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0);
});