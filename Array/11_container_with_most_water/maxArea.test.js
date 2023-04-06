const maxArea = require('./maxArea');

test('case 1 height = [1,8,6,2,5,4,8,3,7] output = 49', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
});


test('case 2 height = [1,1] output = 1', () => {
    expect(maxArea([1,1])).toBe(1);
});