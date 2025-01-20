
  //
  // Your task, is to create N×N multiplication table, of size provided in parameter.
  //
  // For example, when given size is 3:
  //
  // 1 2 3
  // 2 4 6
  // 3 6 9
  // For the given example, the return value should be:
  //
  // [[1,2,3],[2,4,6],[3,6,9]]
  //____________________________________________________________________________________________________________________

  multiplicationTable = function (size) {
      let table = []
      for (let i = 0; i < size; i++) {
          table.push([])
          for (let k = 1; k <= size; k++) {
              table[i].push(k * (i + 1))
          }
      }
      return table
  }