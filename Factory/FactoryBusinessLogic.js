/*********************************************************************
* @problem : write a program to implement Factory Design Pattern
* @fileName : FactoryBusinessLogic.js
* @Auther : Pradnya D. S.
/*********************************************************************/
/*
 *Main class is defined as RBI and it have two child classes as SBI and HDFC
 */

class RBI {
  constructor(ifscCode, staff, branch) {
    this.ifscCode = ifscCode;
    this.staff = staff;
    this.branch = branch;
  }

  display() {
    console.log("Bank Branch Name :" + this.name);
    console.log("IFSC code :" + this.ifscCode);
    console.log("Number of Staff :" + this.staff);
    console.log("Branch code :" + this.branch);
  }
}
class SBI extends RBI {
  constructor(ifscCode, staff, branch) {
    super(ifscCode, staff, branch);
    this.name = "SBI Bank";
    this.display();
  }
}
class HDFC extends RBI {
  constructor(ifscCode, staff, branch) {
    super(ifscCode, staff, branch);
    this.name = "HDFC Bank";
    this.display();
  }
}

class bankInfo {
  create(ifscCode, staff, branch, input) {
    switch (input) {
      case 1:
        return new SBI(ifscCode, staff, branch);
      case 2:
        return new HDFC(ifscCode, staff, branch);
      default:
        console.log("Wrong choice");
        return null;
    }
  }
}
module.exports = new bankInfo();
