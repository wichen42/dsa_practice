const findMin = require('./findMin');

test('Case 1: Input: [4,5,6,7,0,1,2] Output: 0', () => {
    expect(findMin([4,5,6,7,0,1,2])).toBe(0);
});

test('Case 2: Input: [11,13,15,17] Output: 11', () => {
    expect(findMin([11,13,15,17])).toBe(11);
});

test('Case 3: Input: [3,4,5,1,2]', () => {
    expect(findMin([3,4,5,1,2])).toBe(1);
});