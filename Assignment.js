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

// function pandaCost(SingaraQuantity, SamuchaQuantity, JilapiQuantity) {
//     if ((typeof SingaraQuantity !== "number" && typeof SamuchaQuantity !== "number" && typeof JilapiQuantity !== "number")) {

//         return "please enter a intezar number";
//     }
//     else if ((SingaraQuantity <= 0) && (SamuchaQuantity <= 0) && (JilapiQuantity <= 0)) {
//         return "Please enter a valid Number";
//     }
//     const SingaraPrice = 7;
//     const SamuchaPrice = 10;
//     const JilapiPrice = 15;
//     const SingaraOrderPrice = SingaraPrice * SingaraQuantity;
//     const SamuchaOrderPrice = SamuchaPrice * SamuchaQuantity;
//     const JilapiOrderPrice = JilapiPrice * JilapiQuantity;
//     const totalOrderPrice = SingaraOrderPrice + SamuchaOrderPrice + JilapiOrderPrice;
//     return totalOrderPrice;
// }
// const result = pandaCost(6, "m", 9);
// console.log(result);

// Problem No: 03

function picnicBudget(person) {
    const firstHundredCost = 5000;
    const secondHundredCost = 4000;
    const restCost = 3000;

    if (person <= 100) {
        firstHunderdBudget = firstHundredCost * person;
        return firstHunderdBudget;
    }
    else if (person <= 200) {
        firstHunderdBudget = firstHundredCost * 100;
        firstRestPerson = (200 - person);
        secondHunderCalculate = firstRestPerson * secondHundredCost;
        secondHunderdBudget = firstHunderdBudget + secondHunderCalculate;
        return secondHunderdBudget;

    }
    else {
        firstHunderdBudget = firstHundredCost * 200;
        secondHunderdBudget = firstRestPerson * secondHundredCost;
        restHundreadCalculate = person * restCost;
        restBudget = firstHunderdBudget + secondHunderdBudget + restHundreadCalculate;
        return restBudget;
    }

}
const result = picnicBudget(150);
console.log(result);
