const branchInfo = { branch: "Cape Town", branchCode: 1111 };
const branchInfo2 = { branch: "Johannesburg", branchCode: 2222 };

let bankBranchInstance; //Creating a variable to store the singleton instance

class BankBranch {
  //Creating a class
  constructor(branchInfo) {
    // Checking if there is already an instance by checking if bankBranchInstance has a value. if there is a value then it returns the instance.
    if (bankBranchInstance) {
      return bankBranchInstance;
    }
    this.branchInfo = branchInfo; // if there is no instance then one is created.
    bankBranchInstance = this;
  }
  // Static method is responsible for creating the single instance and returning it.
  static getInstance(branchInfo) {
    return new BankBranch(branchInfo);
  }
}
const branchA = BankBranch.getInstance(branchInfo); // creation of the first singleton instance
const branchB = BankBranch.getInstance(branchInfo2); // this second call will not create a new instance as the if condition is now false and therefore the constructor will return the existing one alreay stored.

console.log(branchA); // console.log(branchA) and console.log(branchB) will output the same object which was the bankinfo when the singleton instance was first created.
console.log(branchB);
// branchA and branchB are compared to echother to see if they are equal and the result is true.
console.log(branchA === branchB);
