const CURRENT_YEAR = 2023;

const userBirthDate = Number(prompt("Hi! Kindly specify the year of birth?", "1999"));
const userResidence =  prompt("What city do you live in?", "Kyiv");
const userFaveSport = prompt("What is your favourite sport?", "Basketball");

let userResidenceResult;

if (userResidence === "Kyiv") {
    userResidenceResult = "You're living in Ukraine!";
} else if (userResidence === "Washington") {
    userResidenceResult = "You're living in the United States of America!";
} else if (userResidence === "London") {
    userResidenceResult = "You're living in the United Kingdom!";
} else {
    userResidenceResult = `Your living in ${userResidence}`;
}

let userFaveSportResult;

if (userFaveSport === "Football") {
    userFaveSportResult = "Would you like to be like Lionel Messi?"
} else if (userFaveSport === "Basketball") {
    userFaveSportResult = "Would you like to be like Michael Jordan?"
} else if (userFaveSport === "Box") {
    userFaveSportResult = "Would you like to be like Vitaliy Klitchko?"
} else {
    userFaveSportResult = `Your living in ${userFaveSport}`;
}

let userAge = CURRENT_YEAR - userBirthDate;

if (userBirthDate === null || userResidence === null || userFaveSport === null) {
    alert("It's sad that you didn't want to specify this information")
} else {
    alert (`Your age is ${userAge}
    ${userResidenceResult}
    ${userFaveSportResult}`)
};