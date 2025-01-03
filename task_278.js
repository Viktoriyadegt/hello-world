
  //
  // Find the sum of the odd numbers within an array, after cubing the initial integers.
  // The function should return undefined if any of the values aren't numbers.
  //____________________________________________________________________________________________________________________

  function cubeOdd(arr) {
      let sum = 0
      for (let i = 0; i <= arr.length - 1; i++) {
          if (typeof arr[i] !== "number") {
              return
          }
          if (arr[i] % 2) {
              sum += arr[i] ** 3
          }
      }
      return sum
  }