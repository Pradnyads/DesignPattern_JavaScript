/**********************************************************************
* @problem : Write a program to implement Prototype Design Pattern
* @fileName : Prototype.js
* @Auther : Pradnya D. S.
***********************************************************************/

var Bicycle = function (brand) {
  this.brand = brand;
};

Bicycle.prototype = {
  goForward: function (percent) {
    percent = " Bicycle Moving forward at " + percent + " percent speed!";
    return percent;
  },
};

var myNamespace = myNamespace || {};

// Define a constructor 
myNamespace.Bicycle = function (brand) {
  this.brand = brand;
};

// Set the prototype 
myNamespace.Bicycle.prototype = {
  goForward: function (percent) {
    percent = " Bicycle Moving forward at " + percent + " percent speed!";
    return percent;
  },

  slowDown: function (percent) {
    percent =
      " Bicycle Applying " + percent + " brake pressure. Slowing down now.";
    return percent;
  },
};

// Calling the code using namespaces 
var bike = new myNamespace.Bicycle("ProdecoTech");
var speed = bike.goForward(75);
console.log(speed);

var anotherbike = new myNamespace.Bicycle("Specialized");
var anotherspeed = anotherbike.slowDown(65);
console.log(anotherspeed);

var mountainbike = new myNamespace.Bicycle("Cannondale");
var mbikespeed = mountainbike.slowDown(80);
console.log(mbikespeed);
