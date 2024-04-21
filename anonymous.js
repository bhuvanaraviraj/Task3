
// 1. print the odd numbers in an array
// anonymous 

var num = function(arr){
    var odd =[];
    for(i=0;i<arr.length;i++){
        if(arr[i] % 2!=0){
            odd.push(arr[i]);
        }
    }
    return odd;
}
console.log(num([1,2,3,4,5,6,7,8,9,10,12,12,13,14,15,16,17,18,19,20]));
    
//IIFE
(function(numbers) {
    var odd =[];
    
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            odd.push(numbers[i]);
        }
    }
    console.log(odd)
})([1,2,3,4,5,6,7,8,9,10,12,12,13,14,15,16,17,18,19,20]);


// 2. convert all the strings to title caps in a string array

//anonymous
(function(stringArray) {
   
    var titleCapsArray = stringArray.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
    
    console.log(titleCapsArray);
})(["hello", "world", "javascript", "example"]);

//IIFE
(function(stringArray) {
    
    var titleCapsArray = (function(arr) {
        return arr.map(function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        });
    })(stringArray);
    
    console.log(titleCapsArray);
})(["hello", "world", "javascript", "example"]);


// 3. Sum of all numbers in an array

//anonymous

var numbers = [1, 2, 3, 4, 5];

var sum = function(arr) {
    return arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
}([1, 2, 3, 4, 5]);

console.log(sum);

//IIFE

var sum = 0;
(function(array){
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([1,2,3,4]);
console.log(sum)

// 4. Return all the prime numbers in an array

//anonymous

var prime = function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);

//IIFE

(  
    function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])


// 5. Return all the palindromes in an array

//anonymous

let words = ["level", "radar", "hello", "noon", "world"];

let palindromes = (function(arr) {
    return arr.filter(function(word) {
        let reversedWord = word.split('').reverse().join('');
        return word === reversedWord;
    });
})(words);

console.log("Palindromes:", palindromes);

//IIFE



// 6. Return median of two sorted arrays of the same size

let arr1 = [1, 5, 10, 12];
let arr2 = [2, 4, 6 , 14];

let median = (function(array1, array2) {
    let mergedArray = array1.concat(array2).sort((a, b) => a - b);
    let length = mergedArray.length;

    if (length % 2 === 0) {
        let mid1 = mergedArray[length / 2 - 1];
        let mid2 = mergedArray[length / 2];
        return (mid1 + mid2) / 2;
    } else {
        return mergedArray[Math.floor(length / 2)];
    }
})(arr1, arr2);

console.log("Median:", median);

// 7. Remove duplicates from an array

let arrayWithDuplicates = [1, 2, 2, 3, 4, 5, 6, 1, 7, 8, 9, 10];

let uniqueArray = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})(arrayWithDuplicates);

console.log("Array without duplicates:", uniqueArray);

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





