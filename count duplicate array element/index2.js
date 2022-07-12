arr = [2, 3, 2, 4 ,4 , 5, 3];
arr.sort();

let temp = 0;
let freshArr = [];

for (i=0; i<(arr.length); i++) {
    if (arr[i] == temp) {
        continue;
    }
    count = 0;
    arr.map((elem) => {
        if (arr[i] == elem) {
            count++;
            temp = arr[i];
        }
    });
    freshArr.push(temp);
    console.log(arr[i] + '=' +count);
}

console.log(freshArr);