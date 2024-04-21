// 1. print odd numbers in an array

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = num.filter(num => num % 2 !== 0);

console.log("Odd numbers:", oddNumbers);

// 2. convert all the strings to title caps in an array

const inputArray = ["favourite food is biriyani"];

const titleCapsArray = inputArray.map(str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));

console.log(titleCapsArray);


// 3. sum of all numbers in an array

const numb = [1, 2, 3, 4, 5];

const sum = numb.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of numbers:", sum);

// 4. Return all the prime numbers in an array

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const primeNumbers = numbers.filter(num => isPrime(num));

console.log("Prime numbers:", primeNumbers);

// 5. Return all the palindromes in an array

const words = ["level", "hello", "radar", "world", "civic"];

const isPalindrome = word => {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
};

const palindromeWords = words.filter(word => isPalindrome(word));

console.log("Palindromes:", palindromeWords);



