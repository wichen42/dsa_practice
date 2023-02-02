const containsDuplicate = require('./containsDuplicate');

test('case 1: nums = [1,2,3,1] output = true', () => {
    expect(containsDuplicate([1,2,3,1])).toBe(true);
});

test('case 2: nums = [1,2,3,4] output = false', () => {
    expect(containsDuplicate([1,2,3,4])).toBe(false);
});

test('case 3: num = [1,1,1,3,3,4,3,2,4,2], output = false', () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});