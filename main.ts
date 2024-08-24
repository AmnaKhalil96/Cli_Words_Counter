#! /usr/bin/env node

// Importing inquirer and chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";

//Printing a Welcome Message
console.log(chalk.bold.rgb(204, 204, 204)(chalk.red`\n  \t\t <<<================================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=========>>>        ${chalk.bgBlackBright.bold('  Welcome To \"SAM\" - Words_Counter')}                <<<=========>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(chalk.red`\t\t <<<================================================>>>`));


// Display a colourfull welcome message
console.log(chalk.bold.cyanBright("\n SAM - Words_Counter"));
console.log(chalk.gray("=".repeat(60)));
 
async function main() {
    let runContinue = true;
  
    while(runContinue){

// Prompt the user to enter a sentence
let answers = await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: chalk.green("Enter your sentence to count the words:"),
            validate: (input: string) => {
                if (input.trim() === "") {
                    return chalk.red("Please enter a valid sentence.");
                }
                return true;
            }
        }
    ]
);

// Triming the sentence and splitting it into words based on "spaces"

let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log(chalk.gray("=".repeat(60)));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log(chalk.gray("=".repeat(60)));

const {confirm} =await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message: chalk.magentaBright("Do you want to count the words again?"),
    default: false,
  });
  
   runContinue = confirm;
    }
  console.log(chalk.yellow("\n\t************************************************************************\t"));

  console.log(chalk.greenBright("\n\t\tThank you for using the SAM Words_Counter!\t"));
  
  }
main()







