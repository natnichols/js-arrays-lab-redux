/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = []

console.log('Exercise 1 Result:\n', foods)

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

// Complete Exercise 2 below...

foods.push('pizza', 'cheeseburger')

console.log('Exercise 2 Result:\n',  foods)

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

// Complete Exercise 3 below...

foods.unshift('taco')

console.log('Exercise 3 Result:\n', foods)

/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign it to a variable named favFood.
*/

// Complete Exercise 4 below...

let favFood = foods[1]

console.log('Exercise 4 Result:\n', typeof favFood !== 'undefined' ? favFood : undefined)

/*
Exercise 5:
- Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

// Complete Exercise 5 below...

foods.splice(2, 0, 'tofu')

console.log('Exercise 5 Result:\n', foods)

/*
Exercise 6:
- Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

// Complete Exercise 6 below...

foods.splice(1, 1, 'sushi', 'cupcake')

console.log('Exercise 6 Result:\n', foods)

/*
Exercise 7:
- Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
- Assign the new array to a variable named yummy.
*/

// Complete Exercise 7 below...

let yummy = foods.slice(1, 3)

console.log('Exercise 7 Result:\n', typeof yummy !== 'undefined' ? yummy : undefined)

/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

// Complete Exercise 8 below...

let soyIdx = foods.indexOf('tofu')

console.log('Exercise 8 Result:\n', typeof soyIdx !== 'undefined' ? soyIdx : undefined)

/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

// Complete Exercise 9 below...

let allFoods = foods.join(' -> ')

console.log('Exercise 9 Result:\n', typeof allFoods !== 'undefined' ? allFoods : undefined)

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...

let hasSoup = foods.includes('soup')

console.log('Exercise 10 Result:\n', typeof hasSoup !== 'undefined' ? hasSoup : undefined)

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]

// Complete Exercise 11 below...

let odds = []

nums.forEach(function (num) {
  if (num % 2 !== 0) {
    odds.push(num)
  }
})

console.log('Exercise 11 Result:\n', typeof odds !== 'undefined' ? odds : undefined)

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
*/

// Complete Exercise 12 below...

let fizz = []
let buzz = []
let fizzbuzz = []

nums.forEach(function (num) {
  if (num % 3 === 0) {
    fizz.push(num)
  } 
  if (num % 5 === 0) {
    buzz.push(num)
  } 
  if (num % 15 === 0) {
    fizzbuzz.push(num)
  }
})


console.log('Exercise 12 Results:')
console.log('  fizz:', typeof fizz !== 'undefined' ? fizz : undefined)
console.log('  buzz:', typeof buzz !== 'undefined' ? buzz : undefined)
console.log('  fizzbuzz:', typeof fizzbuzz !== 'undefined' ? fizzbuzz : undefined)

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
]

// Complete Exercise 13 below...

let numList = numArrays[3]

console.log('Exercise 13 Result:\n', typeof numList !== 'undefined' ? numList : undefined)

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign it to a variable named num.
*/

// Complete Exercise 14 below...

let num = numArrays[2][1]

console.log('Exercise 14 Result:\n', typeof num !== 'undefined' ? num : undefined)

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays, and assign the sum to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...

let total = 0

numArrays.forEach(function (arr) {
  arr.forEach(function (num) {
    total += num
  })
})

console.log('Exercise 15 Result:\n', typeof total !== 'undefined' ? total : undefined)