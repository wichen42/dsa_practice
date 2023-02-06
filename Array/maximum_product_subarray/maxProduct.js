// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


function maxProduct (nums) {
    let res = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];

    for (let i=1; i<nums.length; i++) {

        let localMax = Math.max(currMax * nums[i], nums[i], currMin * nums[i]);
        let localMin = Math.min(currMax * nums[i], nums[i], currMin * nums[i]);

        currMax = Math.max(localMax, localMin);
        currMin = Math.min(localMax, localMin);

        result = Math.max(res, currMax);
    }

    return res;
};

module.exports = maxProduct;