function mularDam() {
    const forFirstTwoKg = 30;
    const forRestKg = 25;
    if (mulaQuantity <= 2) {
        let price = mulaQuantity * forFirstTwoKg;
        return price;
    }
    else {
        let price = mulaQuantity * forRestKg;
        return price;
    }
}