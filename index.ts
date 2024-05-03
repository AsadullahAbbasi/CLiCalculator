#!/usr/bin/env node
import inquirer from "inquirer";
// Define the questions
const questions = [
    {
        type: "number",
        name: "firstnum",
        message: "enter first num",
    },
    {
        type: "number",
        name: "secondnum",
        message: "enter second num",
    },
    {
        message: "enter your opr?",
        type: "list",
        name: "opr",
        choices: ["+", "-", "*", "/"],
    },
];
// Prompt the user
const prompt =  inquirer.prompt(questions);
// console.log("Asad");
prompt.then((answers) => {
    console.log(eval(answers.firstnum + answers.opr + answers.secondnum));
});