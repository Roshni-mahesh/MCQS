import inquirer from "inquirer";

const questionAnswer = "Accounting and Finance";

const answer = await inquirer.prompt([
    {
        name:"MCQS",
        message: "select the correct full-form of (AF)",
        type:"number",
        chocies:"(A)Accounting and Finance.),(B)air force.)"
    }
]);

if (answer.userGuessedAnswer === questionAnswer){
    console.log("congratulations! you guessed right answer.")
}else{
    console.log("you guessed wrong answer.")
};


const questionAnswer2 = "Accounting and Finance";

const answer2 = await inquirer.prompt([
    {
    name:"MCQS",
    message: "select the correct full-form of (AI)",
    type:"number",
    chocies:"(A)Artificial Intelligence.),(B)artificial insemination.)"
    }
]);

if (answer.userGuessedAnswer2 === questionAnswer2){
    console.log("congratulations! you guessed right answer.")
}else{
    console.log("you guessed wrong answer.")
};


const questionAnswer3 = "Application Programming Interface";

const answer3 = await inquirer.prompt([
    {
    name:"MCQS",
    message: "select the correct full-form of (API)",
    type:"number",
    chocies:"(A)Artificial Programming Intelligence.),(B)Application Programming Interface)"
    }
]);

if (answer.userGuessedAnswer3 === questionAnswer3){
    console.log("congratulations! you guessed right answer.")
}else{
    console.log("you guessed wrong answer.")
};


const questionAnswer4 = "Amazon Web Services";

const answer4 = await inquirer.prompt([
    {
    name:"MCQS",
    message: "select the correct full-form of (AWS)",
    type:"number",
    chocies:"(A)American Welding Society),(B)Amazon Web Services)"
    }
]);

if (answer.userGuessedAnswer4 === questionAnswer4){
    console.log("congratulations! you guessed right answer.")
}else{
    console.log("you guessed wrong answer.")
};


const questionAnswer5 = "Blind Carbon Copy";

const answer5 = await inquirer.prompt([
    {
    name:"MCQS",
    message: "select the correct full-form of (BCC)",
    type:"number",
    chocies:"(A)Blind Carbon Copy),(B) body-centred cubic)"
    }
]);

if (answer.userGuessedAnswer5 === questionAnswer5){
    console.log("congratulations! you guessed right answer.")
}else{
    console.log("you guessed wrong answer.")
};
