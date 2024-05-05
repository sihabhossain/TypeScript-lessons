{
  // access modifiers

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }

    // getter
    get balance() {
      return this._balance;
    }
  }

  const myAcc = new BankAccount(1, "Sihab", 100);

  const myBalance = myAcc.balance;
  myAcc.deposit = 90;

  console.log(myBalance, myAcc);
}
