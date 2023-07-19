//4 index equal to zero
nums = [1, 1, 0, 0]
sum_indices = 0
var nums = [1, 1, 0, 0];
var sumIndices = 0;

for (var i = 0; i < nums.length; i++) {
  if (nums[i] === 0) {
    sumIndices += i;
  }
}

document.write(".  The sum of the indices where the element is 0 is: " + sumIndices);


