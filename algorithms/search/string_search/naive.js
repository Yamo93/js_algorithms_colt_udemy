function naiveSearch(string, substring) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < substring.length; j++) {
            if (substring[j] !== string[i+j]) {
                // the pattern is broken, so break inner loop
                break;
            }
            if (j === substring.length - 1) {
                // if we made it to the last char of the substring, it means we found a match
                count++;
            }
        }
    }
    return count;
}

naiveSearch('lorie loled', 'lol'); // 1
naiveSearch('lorie loled', 'lo'); // 2

console.log(r);
