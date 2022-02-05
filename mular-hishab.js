function mularDam(mulaQuantity) {
    let price = 0;
    if (mulaQuantity <= 2) {
        price = mulaQuantity * 30;
    }
    else {
        price = mulaQuantity * 25;
    }
    return price;
}
const Totalprice = mularDam(3);
console.log("Total Price: ", Totalprice);