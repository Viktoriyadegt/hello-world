
  //
  //  Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
  //
  // Consult the solution set-up for the exact data structure implementation depending on your language.
  //
  // Example:
  //
  // orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
  //____________________________________________________________________________________________________________________

  const orderedCount = function (text) {
      let obj = {}
      let textArr = text.split('').map(m=>m.toString())
      for(let i = 0; i<=textArr.length-1;i++) {
          if (obj[textArr[i]]) {
              obj[textArr[i]] += 1
          } else {
              obj[textArr[i]] = 1
          }
      }
      let keys = new Set(textArr)
      return [...keys].map(m=>[m, obj[m]])
  }