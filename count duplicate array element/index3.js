arr = [2, 3, 2, 4 ,4 , 5, 3];
arr.sort();

let freshArr = [];

let temp = arr[0];
let count = 0;

for (i=0; i<(arr.length); i++) {
    if (arr[i] == temp) {
        count++;
    } else {
        freshArr.push(temp);
        count = 1;
    }
    temp = arr[i];
    console.log(arr[i] + '=' +count);
}
freshArr.push(temp);

console.log(freshArr);