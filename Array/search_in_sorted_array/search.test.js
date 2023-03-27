const search = require('./search');

test('case 1: nums = [4,5,6,7,0,1,2] target = 0 output = 4', () => {
    expect(search([4,5,6,7,0,1,2], 0)).toBe(4);
});

test('case 2: nums = [4,5,6,7,0,1,2] target = 3 output = -1', () => {
    expect(search([4,5,6,7,0,1,2], 0)).toBe(-1);
});

test('case 3: nums = [1] target = 0 output = -1', () => {
    expect(search([1], 0)).toBe(-1);
});