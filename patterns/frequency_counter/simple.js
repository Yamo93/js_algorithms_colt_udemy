function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    
    const firstFrequencies = {};
    const secondFrequencies = {};
    
    for (let char of first) {
          firstFrequencies[char] = !firstFrequencies[char] ? 1 : firstFrequencies[char] + 1;
    }
  
    for (let char of second) {
          secondFrequencies[char] = !secondFrequencies[char] ? 1 : secondFrequencies[char] + 1;
    }
    
    for (let char in firstFrequencies) {
        if (!char in secondFrequencies) {
            return false;
        }
  
        if (firstFrequencies[char] !== secondFrequencies[char]) {
            return false;
        }
    }
  
    return true;
  }
  
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true