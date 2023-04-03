// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


function isValid(s) {
    const solutionHash = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (solutionHash[s[i]]) {
            stack.push(solutionHash[s[i]]);
        } else if (s[i] !== stack.pop()) {
            return false;
        };
    };
    if (stack.length > 0) return false;
    return true;
};

module.exports = isValid;