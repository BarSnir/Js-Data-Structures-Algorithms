// Create a function that revere a string;

function myReverseString(str) {
    var strArray = str.split('');
    let reversedStr = '';
    for (var i = strArray.length-1; i > -1; i--) {
        reversedStr += strArray[i]
    }
    return reversedStr;
}

console.log(myReverseString('hello'));

function solutionReverseString(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Bad String';
    }
    const backwards = [];
    const totalItems = str.length -1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

console.log(solutionReverseString('Bar'));

function solutionReverseString2(str) {
    return str.split('').reverse().join('');
}

console.log(solutionReverseString2('Bar'));

const revers3 = str => [...str].reverse().join('');

console.log(revers3('Bar'));