const arr = [2, 3, 2, 4 ,4 , 5, 3];

let freshArr = [];

for (i=0; i<(arr.length); i++) {
    count = 1;
    for (j=i+1; j<(arr.length); j++) {
        if (arr[i] == arr[j]) {
            count++;
            arr.splice(j, 1);
        }
    }
    freshArr.push(arr[i]);
    console.log(arr[i] + '=' +count);
}

console.log(freshArr);