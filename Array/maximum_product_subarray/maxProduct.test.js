const maxProduct = require('./maxProduct');

test('Case 1: nums = [2,3,-2,4] output = 6', () => {
   expect(maxProduct([2,3,-2,4])).toBe(6);
});

test('Case 2: nums = [-2,0,-1] output = 0', () => {
    expect(maxProduct([-2,0,-1])).toBe(0)
});