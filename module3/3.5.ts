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

    public addDeposit(amount: number) {
      return (this._balance = this._balance + amount);
    }

    public getBalance() {
      return this._balance;
    }
  }

  //   class studentAcc extends BankAccount {
  //     test() {
  //       this._balance;
  //     }
  //   }

  const myAcc = new BankAccount(1, "Sihab", 100);
  myAcc.addDeposit(20);
  const myBalance = myAcc.getBalance();
  console.log(myAcc, myBalance);
}
