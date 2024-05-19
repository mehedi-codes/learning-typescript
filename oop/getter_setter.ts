// Getter Setter
class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    protected _currentBalance: number;
    constructor(id: number, name: string, balance: number, currentBalance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this._currentBalance = currentBalance
    }
    // public addDeposit(amount: number) {
    //     this._balance = this._balance + amount
    // }

    //Setter
    set deposit(amount: number){
         this._balance = this._balance + amount
    }

    // public getBalance() {
    //     return this._balance;
    // }

    // Getter
    get balance() {
        return this._balance;
    }
}

const goribManusherAccount = new BankAccount(111, "Mr Gorib", 20, 10)
// goribManusherAccount.addDeposit(5) // had to call function to set
// console.log(goribManusherAccount.getBalance()) // had to call function to get
console.log(goribManusherAccount.balance) // don't need to call function to get
goribManusherAccount.deposit = 30 // don't need to call function to set
