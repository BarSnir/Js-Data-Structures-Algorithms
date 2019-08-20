function bubbleSort(arr) { // o(n^2)
    let sortArr = arr;
    for (let j=0; j <= sortArr.length; j++) {
        for (let i=0; i <= sortArr.length; i++ ) {
            if(sortArr[i] > sortArr[i+1]) {
                var tempValue = sortArr[i];
                sortArr[i] = sortArr[i+1];
                sortArr[i+1] = tempValue;
            }
        }
    }
    return sortArr;
}

var arr = [100,90,88,51,2,1,101,80];
console.log(bubbleSort(arr));