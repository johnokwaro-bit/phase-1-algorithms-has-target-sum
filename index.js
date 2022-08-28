function hasTargetSum(array, target) {
  // Write your algorithm here

  // look through each number in the array
  for (let i = 0; i < array.length; i++) {
    // look through the rest of the numbers
    for (let j = i+1; j < array.length; j++) {
      // check if the sum adds up to the target
      if (array[i] + array[j] ===target) return true;
              
    }
    
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
*/
//0(n*n)
/* 
  Add your pseudocode here
*/
// write a code that looks through the array to find two numbers that when added add up to the target
//one count starts at index 0 (i) while the other starts index 1(j)

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
