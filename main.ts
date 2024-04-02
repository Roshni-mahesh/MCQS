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