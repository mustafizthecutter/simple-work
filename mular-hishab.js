function mularDam(mulaQuantity) {
    if (typeof mulaQuantity != "number") {
        return "Please enter a Valid Number";
    }
    if (mulaQuantity <= 0) {
        return "Please Enter a Number";
    }
    if (mulaQuantity > 50) {
        return "Please want some less";
    }
    let price = 0;
    if (mulaQuantity <= 2) {
        price = mulaQuantity * 30;
    }
    else {
        price = mulaQuantity * 25;
    }
    return price;
}
const Totalprice = mularDam(100);
console.log("Total Price: ", Totalprice);