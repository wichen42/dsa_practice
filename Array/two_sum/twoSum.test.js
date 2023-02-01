const twoSum = require('./twoSum');

test('result should be an array with 2 elements', () => {
    expect(twoSum([2,7,11,15], 9)).toHaveLength(2);
});

test('case 1: nums = [2,7,11,15] target = 9 ', () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
});

test('case 2: nums = [3,2,4] target = 6 ', () => {
    expect(twoSum([3,2,4], 6)).toEqual([1,2]);
});

test('case 3: nums = [3,3] target = 6 ', () => {
    expect(twoSum([3,3], 6)).toEqual([0,1]);
})