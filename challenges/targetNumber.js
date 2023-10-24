/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let firstHigher = null;
    let secondHigher = null;

    for (let i = 0; i <= nums.length; i++) {
        const currNum = nums[i];

        if (currNum === target) {
            if (!firstHigher) {
                firstHigher = currNum;
            } else (!secondHigher) {
                secondHigher = currNum;
            }

            continue;
        }

        for (let j = 0; j <= nums.length; j++) {
            if (j !== i) {
                const anotherNum = nums[j];

                if (currNum + anotherNum === target) {
                    firstHigher = i;
                    secondHigher = j;
                    break;
                }
            }
        }
    }

    return [firstHigher, secondHigher];
};
