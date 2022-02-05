function secondLargestNumber(array) {
    let largest = array[0];
    let secondLargest = array[0];
    for (const element of array) {
        if (element > largest) {
            secondLargest = largest;
            largest = element;

        }
        else if (element > secondLargest) {
            secondLargest = element;
        }
    }
    return secondLargest;

}

let array = [34, 56, 43, 23, 45, 67, 69, 68];
const result = secondLargestNumber(array);
console.log(result);
