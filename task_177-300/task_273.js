
  //
  // Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
  //
  // a -> 1
  // e -> 2
  // i -> 3
  // o -> 4
  // u -> 5
  // For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
  //
  // Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
  //
  // For example, decode("h3 th2r2") would return "hi there".
  //
  // For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
  //____________________________________________________________________________________________________________________

  function encode(string) {
      const obj = {a: 1, e: 2, i: 3, o: 4, u: 5}
      let arr1 = string.split('')
      let str = ''
      for (let i = 0; i <= arr1.length - 1; i++) {
          obj[arr1[i]]
              ? str += obj[arr1[i]]
              : str += arr1[i]
      }
      return str
  }

  function decode(string) {
      const obj = {1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u'}
      let arr2 = string.split('')
      let str = ''
      for (let i = 0; i <= arr2.length - 1; i++) {
          obj[arr2[i]]
              ? str += obj[arr2[i]]
              : str += arr2[i]
      }
      return str
  }