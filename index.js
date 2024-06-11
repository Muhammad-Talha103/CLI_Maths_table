#! /usr/bin/env node
import inquirer from "inquirer";
// Maths Table
let condition = true;
while (condition) {
    const num1 = await inquirer.prompt([
        {
            type: "input",
            name: "num1",
            message: "Which Table you want?",
            validate: function (value) {
                if (value > 0) {
                    return true;
                }
                else {
                    return "Please enter a number";
                }
            }
        },
        {
            type: "input",
            name: "num2",
            message: "Where you want to stop table?",
            validate: function (value) {
                if (value > 0) {
                    return true;
                }
                else {
                    return "Please enter a number";
                }
            }
        }
    ]);
    for (let i = 1; i <= num1.num2; i++) {
        console.log(`${num1.num1} * ${i} = ${num1.num1 * i}`);
    }
    const retry = await inquirer.prompt({
        type: "confirm",
        name: "retry",
        message: "Do you want to continue?",
        default: false
    });
    condition = retry.retry;
}
