"use strict"

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

// Elements
const labelWelcome = document.querySelector(".welcome")
const labelDate = document.querySelector(".date")
const labelBalance = document.querySelector(".balance__value")
const labelSumIn = document.querySelector(".summary__value--in")
const labelSumOut = document.querySelector(".summary__value--out")
const labelSumInterest = document.querySelector(".summary__value--interest")
const labelTimer = document.querySelector(".timer")

const containerApp = document.querySelector(".app")
const containerMovements = document.querySelector(".movements")

const btnLogin = document.querySelector(".login__btn")
const btnTransfer = document.querySelector(".form__btn--transfer")
const btnLoan = document.querySelector(".form__btn--loan")
const btnClose = document.querySelector(".form__btn--close")
const btnSort = document.querySelector(".btn--sort")

const inputLoginUsername = document.querySelector(".login__input--user")
const inputLoginPin = document.querySelector(".login__input--pin")
const inputTransferTo = document.querySelector(".form__input--to")
const inputTransferAmount = document.querySelector(".form__input--amount")
const inputLoanAmount = document.querySelector(".form__input--loan-amount")
const inputCloseUsername = document.querySelector(".form__input--user")
const inputClosePin = document.querySelector(".form__input--pin")

const displayMovements = function (movements) {
  // Remove existing static movements in index.html first
  containerMovements.innerHTML = ""

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal"

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${mov}</div>
    </div>`

    containerMovements.insertAdjacentHTML("afterbegin", html)
  })
}
displayMovements(account1.movements)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
])

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

/////////////////////////////////////////////////

/*// SLICE (does not mutate the original array)
let arr = ["a", "b", "c", "d", "e"]
console.log(arr.slice(2)) // ['c', 'd', 'e']
console.log(arr.slice(2, 4)) // ['c', 'd']
console.log(arr.slice(-2)) // ['d', 'e']
console.log(arr.slice(-1)) // ['e']
console.log(arr.slice(1, -2)) // ['b', 'c']

// SPLICE (mutates the original array)
console.log("splice")
arr.splice(-1)
console.log(arr)

// REVERSE (mutates the original array)
arr = ["a", "b", "c", "d", "e"]
const arr2 = ["j", "i", "h", "g", "f"]
// Mutates the orig. array
console.log(arr2.reverse()) // ['f', 'g', 'h', 'i', 'j']
console.log(arr2)

// CONCAT (does not mutate the original array)
const letters = arr.concat(arr2)
console.log(letters)
// alternative (used heavily in react etc.)
console.log([...arr, ...arr2])

// JOIN (does not mutate the original array)
console.log(letters.join(" - "))

const arr3 = [23, 11, 64]
console.log(arr3[arr.length - 1])
console.log(arr3.slice(-1)[0])
// new way with the at method
console.log(arr3.at(-1))
// also works on strings:
console.log("Chris".at(-1))

// LOOPING ARRAYS: forEach
// Old school: for-of-loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`)
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`)
  }
}

// forEach with index
movements.forEach(function (mov, i, _arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`)
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
  }
})

// forEach with maps and sets

// Map
currencies.forEach(function (value, key, _map) {
  console.log(`${key}: ${value}`)
})

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"])
console.log(currenciesUnique)

// Set
currenciesUnique.forEach(function (value, _key, _set) {
  // key is the same as value
  console.log(`${value}: ${value}`)
})
*/

// Coding challenge 1
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
//const j_dogs = [3, 5, 2, 12, 7]
//const k_dogs = [4, 1, 15, 8, 3]
const j_dogs = [9, 16, 6, 8, 3]
const k_dogs = [10, 5, 6, 1, 4]
j_dogs.splice(-2)
j_dogs.splice(0, 1)
console.log(j_dogs)

const all_dogs = j_dogs.concat(k_dogs)

function checkDogs(dogs) {
  dogs.forEach((dog, i, _arr) => {
    if (dog > 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶, Woof!`)
    }
  })
}

checkDogs(all_dogs)
