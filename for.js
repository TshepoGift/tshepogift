// Define an array containing numbers from 1 to 10
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create two empty arrays to store even and odd numbers
const evenNumbers = [];
const oddNumbers = [];

// Loop through each element in the originalArray
for (let i = 0; i < originalArray.length; i++) {
  // Check if the current number is even
  if (originalArray[i] % 2 === 0) {
    // If even, push it to the evenNumbers array
    evenNumbers.push(originalArray[i]);
  } else {
    // If odd, push it to the oddNumbers array
    oddNumbers.push(originalArray[i]);
  }
}

// Print the evenNumbers array, which contains even numbers
console.log("Even Number: ", evenNumbers); // [2, 4, 6, 8, 10]

// Print the oddNumbers array, which contains odd numbers
console.log("Odd Number: ", oddNumbers); // [1, 3, 5, 7, 9]
