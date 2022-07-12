arr = [2, 3, 2, 4 ,4 , 5, 3];
arr.sort();

let temp = arr[0];
let count = 0;

for (i=0; i<(arr.length); i++) {
    if (arr[i] == temp) {
        count++;
    } else {
        count = 1;
    }
    temp = arr[i];
    console.log(arr[i] + '=' +count);
}