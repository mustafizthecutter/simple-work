// let factorial = 1;
// for (let i = 1; i <= 7; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

// function getFactorial(number) {
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// var myFactorial = getFactorial(7);
// console.log("the value is:", myFactorial);

// var mineFactorial = getFactorial(9);
// console.log("the value is:", mineFactorial);

// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;

// }
// var myFactorial = getFactorial(7);
// console.log("the result is", myFactorial);

// var mineFactorial = getFactorial(9);
// console.log("the value is:", mineFactorial);

// function getFactorial(number) {
//     let factorial = 1;
//     let i = number;
//     while (i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// const mineFactorial = getFactorial(7);
// console.log("the result is: ", mineFactorial);

function getFactorial(number) {
    let factorial = 1;

    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
const mineFactorial = getFactorial(7);
console.log("the result is: ", mineFactorial);