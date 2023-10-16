// Define an array containing numbers from 1 to 10
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Create two empty arrays to store even and odd numbers
const evenNumbers = [];
const oddNumbers = [];

// Use the forEach method to iterate through each element in the originalArray
originalArray.forEach((number) => {
  // Check if the current number is even
  if (number % 2 === 0) {
    // If even, push it to the evenNumbers array
    evenNumbers.push(number);
  } else {
    // If odd, push it to the oddNumbers array
    oddNumbers.push(number);
  }
});

// Print the evenNumbers array, which contains even numbers
console.log("Even numbers:", evenNumbers);

// Print the oddNumbers array, which contains odd numbers
console.log("Odd numbers:", oddNumbers);
