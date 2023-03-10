const productExceptSelf = require('./productExceptSelf');

test('case 1: nums = [1,2,3,4] output = [24,12,8,6]', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
});

test('case 2: nums = [-1,1,0,-3,3] output = [0,0,9,0,0]', () => {
    expect(productExceptSelf([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
});