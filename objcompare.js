let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

if (str1 === str2) {
    console.log("The JSON objects are equal.");
} 

else {
    console.log("The JSON objects are not equal.");
}