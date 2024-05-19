// access modifier
class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    protected _currentBalance: number;
    constructor(id: number, name: string, balance: number, currentBalance: number ) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this._currentBalance = currentBalance
    }
    public addDeposit(amount: number) {
        this._balance = this._balance + amount
    }
    public getBalance() {
        return this._balance;
    }
}

class StudentAccount extends BankAccount {
    test(){this._currentBalance}
}

// readonly keyword is used to stop modification of a property completely
// But to stop modification of a property but also can be modified
// in exception cases we will use private keyword
// to make the property private (by default properties are public)
// when defining a private property we should use _ (underscore) before the
// variable name to identify the private property
// the extend the limitation of property declared with private into a child
// instance we will use protected keyword 

const goribManusherAccount = new BankAccount(111, "Mr Gorib", 20, 10)
goribManusherAccount.addDeposit(5)
console.log(goribManusherAccount.getBalance())
