const numbers = [1, 3, 4, 5, 6, 2, 3, 4, 8, 9, 10];
function removeDuplicate() {
    const unique = [];
    for (const element of numbers) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const finalResult = removeDuplicate(numbers);
console.log(finalResult);