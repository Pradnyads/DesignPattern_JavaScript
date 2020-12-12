/*********************************************************************
* @problem : write a program to implememt Factory Design Pattern
* @fileName : FactoryMain.js
* @Auther : Pradnya D. S.
/*********************************************************************/

//FactoryBusinessLogic file is imported

const factory = require("./FactoryBusinessLogic");

var tempObj = factory.create(1678549, 40, 9, 1);
console.log("Created SBI Branch Information");

var tempObj = factory.create(3421456, 50, 7, 2);
console.log("created HDFC Branch Information");
