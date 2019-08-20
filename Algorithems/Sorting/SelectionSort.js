function selectionSort(array) {
    const length = array.length;
    for(let i = 0; i < length; i++){
      // set current index as minimum
      let min = i;
      let temp = array[i];
      for(let j = i+1; j < length; j++){
        if (array[j] < array[min]){
          //update minimum if current is lower that what we had previously
          min = j;
        }
      }
      array[i] = array[min];
      array[min] = temp;
    }
    return array;
  }

let arr = [9, 8, 10, 11, 2, 5];
console.log(selectionSort(arr));