
// 1. print the odd numbers in an array

// (function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number' && arr[i] % 2 !== 0) {
//             console.log(arr[i]);
//         }
//     }
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 2. convert all the strings to title caps in a string array

// (function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             arr[i] = arr[i].toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
//         }
//     }

//     console.log(arr);
// }) (["favourite food is biriyani"]);

// 3. Sum of all numbers in an array

// let numbers = [10,20,40,60,100];

// let sum = (function(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             total += arr[i];
//         }
//     }
//     return total;
// })(numbers);

// console.log("Sum of numbers:", sum);

// 4. Return all the prime numbers in an array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// let primeNumbers = (function(arr) {
//     return arr.filter(function(num) {
//         if (num < 2) {
//             return false;
//         }
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     });
// })(numbers);

// console.log("Prime numbers:", primeNumbers);

// 5. Return all the palindromes in an array

// let words = ["level", "radar", "hello", "noon", "world"];

// let palindromes = (function(arr) {
//     return arr.filter(function(word) {
//         let reversedWord = word.split('').reverse().join('');
//         return word === reversedWord;
//     });
// })(words);

// console.log("Palindromes:", palindromes);

// 6. Return median of two sorted arrays of the same size

// let arr1 = [1, 5, 10, 12];
// let arr2 = [2, 4, 6 , 14];

// let median = (function(array1, array2) {
//     let mergedArray = array1.concat(array2).sort((a, b) => a - b);
//     let length = mergedArray.length;

//     if (length % 2 === 0) {
//         let mid1 = mergedArray[length / 2 - 1];
//         let mid2 = mergedArray[length / 2];
//         return (mid1 + mid2) / 2;
//     } else {
//         return mergedArray[Math.floor(length / 2)];
//     }
// })(arr1, arr2);

// console.log("Median:", median);

// 7. Remove duplicates from an array

// let arrayWithDuplicates = [1, 2, 2, 3, 4, 5, 6, 1, 7, 8, 9, 10];

// let uniqueArray = (function(arr) {
//     return arr.filter(function(value, index, self) {
//         return self.indexOf(value) === index;
//     });
// })(arrayWithDuplicates);

// console.log("Array without duplicates:", uniqueArray);

//  8.Rotate an array by k times

let originalArray = [1, 2, 3, 4, 5];
let k = 2;

let rotatedArray = (function(arr, rotations) {
    let length = arr.length;
    rotations = rotations % length; 

    let rotatedPart = arr.slice(0, length - rotations);
    let remainingPart = arr.slice(length - rotations);
    
    return remainingPart.concat(rotatedPart);
})(originalArray, k);

console.log("Original Array:", originalArray);
console.log("Rotated Array by", k, "times:", rotatedArray);




