const branchInfo = { branch: "Cape Town", branchCode: 1111 };
const branchInfo2 = { branch: "Johannesburg", branchCode: 2222 };

let bankBranchInstance; //Creating a variable to store the singleton instance

class BankBranch {
  //Creating a class
  constructor(branchInfo) {
    if (!bankBranchInstance) {
      // Checking if there is already an instance by checking if bankBranchInstance has a null value.
      this.branchInfo = branchInfo; // if there is no instance then we create one and used Object.freeze to make imposible to change.
      bankBranchInstance = Object.freeze(this);
    }
    return bankBranchInstance;
  }
  getBranchInfo() {
    // getBanchInfo is a method to console.log the branch information.
    return console.log(this.branchInfo);
  }
}

const branchA = new BankBranch(branchInfo); // creation of the first singleton instance
const branchB = new BankBranch(branchInfo2); // this second call will not create a new instance as the if condition is now false and therefore the constructor will return the existing one alreay stored.

console.log(branchA); // console.log(branchA) and console.log(branchB) will output the same object which was the bankinfo when the singleton instance was first created.
console.log(branchB);
console.log(branchA === branchB);

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.
