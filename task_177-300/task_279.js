
  //
  // Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
  //
  // For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
  //
  // The input will be a lowercase string with no spaces.
  //
  // Good luck!
  //
  // If you like this Kata, please try:
  //____________________________________________________________________________________________________________________

  function capitalize(s) {
      let arr = ['', '']
      let sArr = s.split('')
      for (let i = 0; i <= sArr.length - 1; i++) {
          if (i % 2) {
              arr[0] += sArr[i]
              arr[1] += sArr[i].toUpperCase()
          } else {
              arr[1] += sArr[i]
              arr[0] += sArr[i].toUpperCase()
          }
      }
      return arr
  }