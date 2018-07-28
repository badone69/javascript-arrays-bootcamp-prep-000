var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles']
  
  function addElementToBeginningOfArray(array, element){
    return [element, ...array];
}
  
  function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;
}
  
  function addElementToEndOfArray(array, element){
    return [...array, element];
}

<<<<<<< HEAD
  function destructivelyAddElementToEndOfArray(array, element){
    array.push(element);
    return array;
  }
  
  function accessElementInArray(array, index) {
    return array [index];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
  }
  
  function removeElementFromBeginningOfArray(array){
    array = array.slice(1);
    return array;
  }
  
  function destructivelyRemoveElementFromEndOfArray(array){
    array.pop();
    return array;
  }
  
  function removeElementFromEndOfArray (array){
    array = array.slice(0, array.length - 1);
    return array;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
=======
  function destructivelyAddElementToEndofArray(array, element){
    array.push(element);
    return array;
  }
>>>>>>> b752b8fbea0513e399b246a51ec46a08090addd5
