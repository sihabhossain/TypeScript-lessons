{
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type User = User1 & { role: string };
  interface AlsoUser extends User2 {
    role: string;
  }

  const User1: AlsoUser = {
    name: "sihab",
    age: 10,
    role: "admin",
  };

  //   interface in array

  type Roll = number[];

  interface Roll1 {
    [index: number]: number;
  }

  const RollNumber: Roll1 = [1, 1, 23, 34];

  //   interface in function

  type Add = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const Add: Add2 = (num1, num2) => num1 + num2;
}
