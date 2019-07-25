/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

function getTwoSumIndices(target){
    const numbers = [5, 6, 8, 2, 11, 15, 7];
    const indicesArr = [];

    let convertedObj = {};
    for ( let i = 0; i < numbers.length; i++) {
        convertedObj[numbers[i]] = true;
    }
    for ( let i = 0; i < numbers.length; i++) {
        var rest = target - numbers[i];
        if(convertedObj.hasOwnProperty(rest)){
            indicesArr.push(i);
            break;
        }
    }
    var indexRest = numbers.indexOf(rest);
    indicesArr.push(indexRest);
    return indicesArr;
}

console.log(getTwoSumIndices(24));
