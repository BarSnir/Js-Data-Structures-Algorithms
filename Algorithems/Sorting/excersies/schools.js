const schools = [10, 11, 13, 9, 5, 6, 2, 1, 22, 7];
// counting sort
function sortSchools(arr){
    let min,max;
    for(let i = 0; i < arr.length; i++){
        if(!min) {
            min = arr[i];
        } else if(min > arr[i]){
            min = arr[i];
        }
        if(!max) {
            max = arr[i];
        } else if(max < arr[i]){
            max = arr[i];
        }
    }

    let countingArr = new Array(max-min);

    for(let j=0; j < arr.length; j++){
        countingArr[arr[j]] = arr[j];
    }

    var filtered = countingArr.filter(function (el) {
        return el != null;
    });
    return filtered;
}

console.log(sortSchools(schools));