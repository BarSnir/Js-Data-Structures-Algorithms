//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    const recurringArr = input;
    const distanceObj = {};

    for(let i in recurringArr) {
        if (!distanceObj[recurringArr[i]]){
            distanceObj[recurringArr[i]] = [i]
            continue;
        }

        distanceObj[recurringArr[i]].push(i) 
    }

    for(let i in recurringArr) {
        if (distanceObj[recurringArr[i]].length <  2){
            delete distanceObj[recurringArr[i]];
        }
    }

    var numState;
    var closerIndices;

    for(let i in distanceObj) {
        let rest = parseInt(distanceObj[i][1]) - parseInt(distanceObj[i][0]);
        if (!numState && Number.isInteger(rest)) {
            numState = rest;
            closerIndices = i;
            continue; 
        } 
        if(rest < numState){
            numState = rest;
            closerIndices = i;
        }
    }
    return closerIndices;
}
console.log(firstRecurringCharacter([2,5,4,2,3,1,2,4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

/** solution code;
 * function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i;
    }
  }
  return undefined
}

firstRecurringCharacter2([1,5,5,1,3,4,6])
 */