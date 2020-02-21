/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line
function blackJack(playerCardScore, dealerCardScore) {
  if (playerCardScore > dealerCardScore || (dealerCardScore > 21 && 21 - playerCardScore > 0)) {
    console.log(playerCardScore)
    console.log('player wins')
  }
  else if (playerCardScore < dealerCardScore || (playerCardScore > 21 && 21 - dealerCardScore >= 0)) {
    console.log(dealerCardScore)
    console.log('dealer win')
  }
  else if (playerCardScore === dealerCardScore && playerCardScore > 21 && dealerCardScore > 21) {
    console.log(0)
    console.log('bust')
  }
  else if (playerCardScore === dealerCardScore && playerCardScore <= 21 && dealerCardScore <= 21){
    console.log(playerCardScore)
    console.log('tie')
    }
    else {
    }
}

blackJack(21, 21)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 2:')

// Add your code below this line
let score = 0
let i = 0
function scrabbleScore(word) {
  for (i = 0; i < word.length; i++) {
    if (word.charAt(i) === 'a' || word.charAt(i) === 'e' || word.charAt(i) === 'i' || word.charAt(i) === 'o' || word.charAt(i) === 'u' || word.charAt(i) === 'l' || word.charAt(i) === 'n' || word.charAt(i) === 'r' || word.charAt(i) === 's' || word.charAt(i) === 't') {
      score = score + 1
      // console.log('one point')
    }
    else if (word.charAt(i) === 'd' || word.charAt(i) === 'g'){
      score = score + 2
    }
    else if (word.charAt(i) === 'b' || word.charAt(i) === 'c' || word.charAt(i) === 'm' || word.charAt(i) === 'p') {
      score = score + 3
      // console.log('three')
    }
    else if (word.charAt(i) === 'f' || word.charAt(i) === 'h' || word.charAt(i) === 'v' || word.charAt(i) === 'w' || word.charAt(i) === 'y') {
      score = score + 4
    }
    else if (word.charAt(i) === 'k') {
      score = score + 5
    }
    else if (word.charAt(i) === 'j' || word.charAt(i) === 'x') {
      score = score + 8
    }
    else if (word.charAt(i) === 'q' || word.charAt(i) === 'z') {
      score = score + 10
    }
    else {

    }
  }

}
scrabbleScore('javascript')
console.log(score)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 3:')

// Add your code below this line

// function isPalindrome(word) {
//   let i = 0
//   let letters = word.split('')
//   console.log(letters)
//   for (let i = 0; i < letters.length; i++) {
//     let currentLetter = letters[i]
//     let lastLetter = letters[(letters.length - 1 - i)]
//     console.log(i)
//     console.log(letters.length - i)
//     if (currentLetter === lastLetter) {
//       return true
//       console.log(currentLetter)
//     }
//     else {
//       return false
//       console.log(currentLetter)
//       console.log(lastLetter)
//     }
//   }
// }

function isPalindrome(word) {
  let letters = word.split('')
  let lettersReverse = letters.slice(0).reverse()
  console.log(lettersReverse)
  console.log(letters)
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== lettersReverse[i]) {
      return false
    } else {
      }
  }
  return true
}

// const palindrome = isPalindrome()
let palindrome = isPalindrome('hello')
console.log(palindrome)

// figure out how to reverse array. see if array === reversed array


function pallyPalindrome(word) {
  let letters = word.split('')
  let lettersReverse = letters.reverse()
  let wordReverse = lettersReverse.join('')
    return word === wordReverse
}

console.log(pallyPalindrome('noon'))

//
// 1. length --> half the lenght of the words
// 2. check i = length - 1 &&
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 4:')

// Add your code below this line
function doubleLetters(word) {
  let letters = word.slice('')
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i + 1]) {
      return true
    }
    else {
    }
  }
  return false
}

let double = doubleLetters('poop')
console.log(double)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 5 - bonus:')

// Add your code below this line

function wordCount(phrase) {
  let words = phrase.replace(',', '').split(' ')
  console.log(words)
  const count = {}
  words.forEach((word) => {
    if (count[word] === undefined) {
      count[word] = 1
    }
    else {
      count[word] = count[word] + 1
    }
  })
  console.log(count)
}

wordCount("Humpty, Dumpty sat on a wall Humpty Dumpty had a great fall")

// create empty object
// if string isnt found and doesnt exist in object, add objecg and count of 1
// if string does exist in object, add count of 1


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
