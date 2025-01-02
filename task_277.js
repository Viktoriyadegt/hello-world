
  //
  // Color Ghost
  // Create a class Ghost
  //
  // Ghost objects are instantiated without any arguments.
  //
  // Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
  //
  // ghost = new Ghost();
  // ghost.color //=> "white" or "yellow" or "purple" or "red"
  //____________________________________________________________________________________________________________________

  const Ghost = function() {
      const array =  ['white', 'yellow', 'purple', 'red'];
      return {
          color: array[Math.floor(Math.random() * array.length)]
      }
  };