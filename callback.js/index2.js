// let count = 1;

// let recursive = function () {
//     if (count >= 4) {
//         console.log('Count is exced');
//         return;
//     }
//     console.log(count);
//     count++;
//     recursive();
// }

// let result = recursive();
// console.log(result);

// ============================================================= //
// ======================== Factorial ========================== //

// let factorial = function (num) {
//     if (num == 0) {
//         return 1
//     } else {
//         return num * factorial(num - 1);
//     }
    
// }

// let result = factorial(4);
// console.log(result);

// ============================================================= //
// ======================== Factorial 2  ======================= //

let factorial = function (num, result=1) {
    if (num == 0) {
        return result;
    } else {
        result = result * num;
        return factorial(num - 1, result);
    }
    
}

let result = factorial(4);
console.log(result);
