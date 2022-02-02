function getSmallest(numbers) {
    let smallest = numbers[1];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < smallest) {
            smallest = element;

        }
    }
    return smallest;

}

const numbers = [34, 56, 45, 23, 42, 12];
var smallestNumber = getSmallest(numbers);
console.log("the smallest number is: ", smallestNumber);