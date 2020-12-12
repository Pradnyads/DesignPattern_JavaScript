/*********************************************************************
* @problem : write a program to implement singleton Designs Pattern
* @fileName : SingletonMain.js
* @Auther : Pradnya D. S.
/*********************************************************************/

//SingletonBusinessLogic file is imported

const engineObject = require("./SingletonBusinessLogic.js");

let firstInstance = engineObject.getInstance();
let secondInstance = engineObject.getInstance();

firstInstance.start();
console.log(firstInstance.state());

secondInstance.stop();
console.log(secondInstance.state());
