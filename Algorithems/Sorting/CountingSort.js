let countingSort = (arr, min, max) => {
    let i = min,
        j = 0,
        len = arr.length,
        count = new Array(max - min).fill(0);

    console.log(count.length)
    for (i = 0; i < len; i++) {
        count[arr[i]] += 1;
    }
    for (i = min; i <= max; i++) {
        while (count[i] > 0) {
            arr[j] = i;
            j++;
            count[i]--;
        }
    }
    return arr;
};

var arr = [ 100, 90, 150, 87, 56, 12, 8, 45,67 ];
var min = 8;
var max = 150;

console.log(countingSort(arr, min, max));