#! /usr/bin/env node
import inquirer from "inquirer";
let quesArray = [
    {
        num: 1,
        question: "HTML stand for",
        Option: [
            "Hyper text markup Language",
            "Hyper text programming Language",
            "Hyper text styling Language",
            "Hyper text scripting Language",
        ],
        answer: "Hyper text markup Language"
    },
    {
        num: 2,
        question: "Which type of JavaScript Languages is",
        Option: [
            "Object-Oriented ",
            "Object-Base",
            "Assembly Languages",
            "high Level",
        ],
        answer: "Object-Base"
    },
    {
        num: 3,
        question: "The 'function' and  'var' are known as:",
        Option: [
            "Keywords",
            "Data types",
            "Declaration statements",
            "Prototypes",
        ],
        answer: "Declaration statements"
    },
    {
        num: 4,
        question: "who is the present president of pakistan",
        Option: [
            "Arif Alvi",
            "Imran Khan",
            "Nawaz Sharif",
            "Zardari",
        ],
        answer: "Arif Alvi"
    },
    {
        num: 5,
        question: "How many prayers in a day:",
        Option: [
            "6",
            "5",
            "3",
            "none",
        ],
        answer: "5"
    },
    {
        num: 6,
        question: "How many total surah in quran",
        Option: [
            "113",
            "114",
            "112",
            "111",
        ],
        answer: "114"
    },
    {
        num: 7,
        question: "The correct sequence of HTML tags for starting a webpage is",
        Option: [
            "Head, Title, HTML, body",
            "HTML, Body, Title, Head",
            "HTML, Head, Title, Body",
            "HTML, Title , Head,  Body",
        ],
        answer: "HTML, Head, Title, Body"
    }
];
console.log("\t\t\t\t\t\x1b[1m-------------Welcome To Quiz Game-----------------");
let totalCorrectAnswer = 0;
for (var i = 0; i < quesArray.length; i++) {
    const answer = await inquirer.prompt([{
            name: `Question`,
            message: quesArray[i].question,
            type: "list",
            choices: quesArray[i].Option
        }]);
    if (answer.Question == quesArray[i].answer) {
        // console.log("Succes");
        totalCorrectAnswer = totalCorrectAnswer + 1;
        // console.log(totalCorrectAnswer);
    }
}
console.log(`Your Correct Answer ${totalCorrectAnswer} out of ${quesArray.length}`);
