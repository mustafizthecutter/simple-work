// Problem NO: 01

// 1 vori = 16 ana

function anaToVori(ana) {
    if (typeof ana != 'number') {
        return "Please enter valid a number";
    }
    else if (ana <= 0) {
        return "Please enter a Number";
    }
    const vori = ana / 16;
    return vori;
}
const ana = 5;
const result = anaToVori(ana);
console.log(result);