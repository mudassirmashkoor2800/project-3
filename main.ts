#! /usr/bin/env node

import inquirer from "inquirer";


let myBalance = 100000;
let myPin = 1234;

let pinanswer = await inquirer.prompt([{
    name : "pin",
    type : "number",
    message : "Enter Your Pin",
}])
if (pinanswer.pin === myPin){
    console.log("Your Pincode is Correct");
    let operationans = await inquirer.prompt([{
        name : "operation",
        message : "Select Option",
        type : "list",
        choices : ["withdraw" , "check balance"],
    }])
    if(operationans.operation === "withdraw"){
        let amountans = await inquirer.prompt([{
            name : "amount",
            type : "number",
            message : "Enter Amount you want to withdraw",
        }])
        if(amountans.amount > myBalance){
            console.log("You have insufficiant balance");
            
        }else{myBalance -= amountans.amount};
        console.log(`Your remianing balance is Rs.${myBalance}.`);
        
    }else if (operationans.operation === "check balance"){
        console.log(`Your balance is Rs.${myBalance}`);
        
    }
} else{console.log("You Entered invalid Pincode");
}