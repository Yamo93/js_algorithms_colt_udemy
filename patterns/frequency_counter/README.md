# Frequency Counter

The frequency counter pattern helps with problems that often involve nested loops, like comparing two lists with each other to see if each item exists in the other.

Any time you have multiple collections of data and you need to compare their items against each other, then a frequency counter might be handy.

# Frequency counter - validAnagram

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as _cinema_, formed from _iceman_.

## Examples:
```js
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
```