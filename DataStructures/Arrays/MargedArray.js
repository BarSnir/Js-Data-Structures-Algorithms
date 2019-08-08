function margeSortedArrays(items1, items2) {
    const margesArray = [];
    let firstArray = items1[0];
    let secondArray = items2[0];
    let i = 1;
    let j = 1;

    //check input 
    if(items1.length === 0 ){
        return items2;
    }
    if(items2.length === 0 ){
        return items1;
    }

    while(firstArray || secondArray) {
        if(shouldPushFirstItem(firstArray, secondArray)) {
            margesArray.push(firstArray);
            firstArray = items1[i];
            i++;
        }
        else {
            margesArray.push(secondArray);
            secondArray = items2[j];
            j++;
        }
    }
    return margesArray;
}

function shouldPushFirstItem(firstArray, secondArray){
    return !secondArray || firstArray < secondArray
}

console.log(margeSortedArrays([0,3,4,31], [4,6,30]));