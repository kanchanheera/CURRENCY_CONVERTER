#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
console.log(chalk.yellowBright.bold("\n\t Welcome to Kanchan Heera - Currency Converter\n"));
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 278,
    CAD: 1.3,
    AUD: 1.53,
    AED: 3.67,
    JPY: 153
};
while (condition) {
    let userAns = await inquirer.prompt([
        {
            name: 'from',
            message: chalk.cyanBright.bold `Select the currency to convert from:`,
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'CAD', 'AUD', 'AED', 'JPY']
        },
        {
            name: 'to',
            message: chalk.cyanBright.bold `Select the currency to convert into:`,
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'CAD', 'AUD', 'AED', 'JPY']
        },
        {
            name: 'amount',
            message: chalk.magentaBright.bold `Enter Your Amount`,
            type: 'number'
        },
    ]);
    let fromAmount = currency[userAns.from];
    let toAmount = currency[userAns.to];
    let amount = userAns.amount;
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    console.log(chalk.greenBright.bold(convertedAmount.toFixed(2)));
}
