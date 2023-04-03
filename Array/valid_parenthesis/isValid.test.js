const isValid = require('./isValid');

test('case 1: s = () output = true', () => {
    expect(isValid("()")).toBe(true);
});


test('case 2: s = ()[]{} output = true', () => {
    expect(isValid("()[]{}")).toBe(true);
});

test('case 3: s = (] output = false', () => {
    expect(isValid("(]")).toBe(false);
});