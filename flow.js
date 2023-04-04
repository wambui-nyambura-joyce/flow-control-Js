// Write a function that accepts an array of strings and console.logs each element using a for loop.
function arrayOfStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  const myStrings = ["Hello", "Joyce", "how", "are", "you", "doing", "today"];
arrayOfStrings(myStrings);

// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function arrayOfNumbers(arr) {
    arr.forEach(function(number) {
      console.log(number * 2);
    });
  }
  const numbers = [10,20,30,40,50];
arrayOfNumbers(numbers);

// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

function numbersArray(arr) {
    for (let i = 0; i < 4; i++) {
      arr[i] *= 8;
    }
  
    for (let i = arr.length - 2; i < arr.length; i++) {
      arr[i] += 5;
    }
  
    console.log(arr);
}
  const digits = [12,14,16,18,20,22,24];
numbersArray(digits);

// Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];

function fourthIndex(arr) {
  let i = 0;
  while (i < arr.length) {
    if (i === 4) {
      break;
    }
    console.log(arr[i]);
    i++;
  }
}

let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
fourthIndex(arrNum);

// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']

function secondIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 2) {
      continue;
    }
    console.log(arr[i]);
  }
}

let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
secondIndex(fruits);