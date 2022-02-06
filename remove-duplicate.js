const names = ["ahsan", "mustafiz", "murad", "hridoy", "murad", "mustafiz"];
function removeDuplicate(array) {
    let latest = '';
    for (const name of array) {

        if (latest.indexOf(name) >= 0) {
            let result = name.slice(latest);
            latest = result;
        }
    }
    return latest;


}
const output = removeDuplicate(names);
console.log(output);
