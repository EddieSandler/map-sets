//1) 1,2,3,4

// console.log(new Set([1,1,2,2,3,4]))


//2 ref
// console.log([...new Set("referee")].join())

//3) {
//   [1,2,3]:true,
//   [1,2,3]:false
// }

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// console.log(m)


const hasDuplicate = (arr) => [...new Set(arr)].length !== arr.length;

// hasDuplicate([1, 3, 2, 1]); // true
// hasDuplicate([1, 5, -1, 4]); // false


function checkForVowel(letter) {

  return 'aeiou'.includes(letter); //helper function to check for vowel
}

function vowelCount(str) {
  const vowelMap = new Map(); //create empty map
  for (let ch of str) { // iterate through string and convert to lowercase
    let letter = ch.toLowerCase();

    if (checkForVowel(letter)) {

      if (vowelMap.has(letter)) { //if the lette is a vowel and already exists
                                  //as a key in the map, increment value
        vowelMap.set(letter, vowelMap.get(letter) + 1);
      } else {
        vowelMap.set(letter, 1); //if letter is not in map, set as key with value =1
      }
    }

  }
  console.log(vowelMap);
  return vowelMap;   // return the map
}




vowelCount('Awesome');
// console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }