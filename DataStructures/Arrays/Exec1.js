/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */

function getTwoSumIndices(){
    const numbers = [2, 7, 11, 15, 7];
    const target = 9;
    const indicesArr = [];

    let rest = target;

    for ( let i = 0; i < numbers.length; i++) {
        if( numbers[i] > rest ){
            continue;
        }
        rest = rest - numbers[i];
        indicesArr.push(i);
        
    }
}