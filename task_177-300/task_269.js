
  //
  //  Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.
  //
  // Ex:
  //
  // 274 -> '2-7-4'
  // 6815 -> '68-1-5'
  //____________________________________________________________________________________________________________________

  function dashatize(num) {
      if (Math.abs(num).toString().length === 1) {
          return Math.abs(num).toString()
      }

      let str = ''
      let arr = Math.abs(num).toString().split('').map(m => +m)
      const lastValue = arr.length - 1
      for (let i = 0; i <= lastValue; i++) {
          if (arr[i] % 2 && i !== lastValue) {
              str += str[str.length - 1] === '-' || i === 0 ? `${arr[i]}-` : `-${arr[i]}-`
          } else {
              str += i === lastValue && str[str.length - 1] !== '-' && arr[i] % 2 ? `-${arr[i]}` : arr[i]
          }
      }
      return str
  }