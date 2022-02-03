// // here [0,1,1,2,3,5,8,13,21,34,55]
// const fibo = [0, 1];
// for (let i = 2; (i >= 40 && i <= 49); i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

function fibonacciSeries(nums) {
    const fibo = [0, 1];
    for (let i = 2; i <= nums; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;

}
const getElement = fibonacciSeries(10);
console.log(getElement);