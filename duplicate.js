const bestFriends = ['ahsan', 'murad', 'hridoy', 'mustafiz', 'ahsan', 'sami', 'sami', 'ammar', 'mustafiz'];

function removeDuplicate(bestFriends) {
    const unique = [];
    for (let i = 0; i <= bestFriends.length; i++) {
        var element = bestFriends[i];

        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
        // console.log(element);
    }
    return unique;
}
const result = removeDuplicate(bestFriends);
console.log(result);
