const listing = [ 50, 81, 51, 51, 22, 99, 17, 51 ];

function listingSort(array, left, right){
    const len = array.length; 
    let pivot;
    let partitionIndex;
  
    if(left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right);
      
      //sort left and right
      listingSort(array, left, partitionIndex - 1);
      listingSort(array, partitionIndex + 1, right);
    }
    return array;
}

function partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;
  
    for(let i = left; i < right; i++) {
      if(array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}
  
function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
console.log(listingSort(listing, 0, listing.length-1));