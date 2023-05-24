let userArrayLength = Number(prompt("Kindly specify the length of the array:"));
const userArray = [];

if (!Number.isInteger(userArrayLength)) {
    userArrayLength = Number(prompt("Kindly specify the length of the array:"));
} else {
    for (let i = 0; i < userArrayLength; i++) {
        let arrayElement = Number(prompt(`Kindly specify the element №${i + 1} of array`));

        if (!Number.isInteger(arrayElement)) {
            arrayElement = Number(prompt(`Kindly specify the element №${i + 1} of array`));
        } else {
            userArray.push(arrayElement); 
        }
    }
    
    console.log(userArray);
    
    const userSortArray = userArray.sort((a,b) => a-b);
    
    console.log(userSortArray);
    
    userSortArray.splice(2, 3);
    
    console.log(userSortArray);
}