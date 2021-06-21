function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    
    const frequencies = {};
    
    for (let char of first) {
          frequencies[char] = !frequencies[char] ? 1 : frequencies[char] + 1;
    }
    
    for (let char of second) {
        if (!frequencies[char]) {
            return false;
        }
        frequencies[char]--;
    }
  
    return true;
  }
  
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true