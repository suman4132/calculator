function sumOfEvenNumbers(arr) {
    let sum = 0;
  
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current number is even
      if (arr[i] % 2 === 0) {
        sum += arr[i]; // Add the even number to the sum
      }
    }
  
    return sum;
  }
  
  // Function to get user input
  function getUserInput() {
    const input = prompt("Enter a list of numbers separated by commas:");
    
    // Convert input string to an array of numbers
    const numbers = input.split(',').map(Number);
    
    return numbers;
  }
  
  // Get user input and calculate the sum of even numbers
  const userNumbers = getUserInput();
  const result = sumOfEvenNumbers(userNumbers);
  
  console.log("Sum of even numbers:", result);
  