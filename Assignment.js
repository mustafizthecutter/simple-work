// Problem NO: 01

// 1 vori = 16 ana

// function anaToVori(ana) {
//     if (typeof ana != 'number') {
//         return "Please enter valid a number";
//     }
//     else if (ana <= 0) {
//         return "Please enter a Number";
//     }
//     const vori = ana / 16;
//     return vori;
// }
// const ana = 5;
// const result = anaToVori(ana);
// console.log(result);


// Problem No: 02

function pandaCost(SingaraQuantity, SamuchaQuantity, JilapiQuantity) {
    const SingaraPrice = 7;
    const SamuchaPrice = 10;
    const JilapiPrice = 15;
    const SingaraOrderPrice = SingaraPrice * SingaraQuantity;
    const SamuchaOrderPrice = SamuchaPrice * SamuchaQuantity;
    const JilapiOrderPrice = JilapiPrice * JilapiQuantity;
    const totalOrderPrice = SingaraOrderPrice + SamuchaOrderPrice + JilapiOrderPrice;
    return totalOrderPrice;
}
const result = pandaCost(2, 5, 3);
console.log(result);