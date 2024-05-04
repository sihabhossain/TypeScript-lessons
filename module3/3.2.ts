// OOP inheritence
{
  // class parent

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(hours: number) {
      console.log(`he ${this.name} will get ${hours} of sleep`);
    }
  }

  // student class
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student = new Student("Sihab", 20, "Dhaka");

  student.getSleep(2);

  // teacher class
  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    getSleep(hours: number) {
      console.log(`this student ${this.name} will get ${hours} of sleep`);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} classes`);
    }
  }

  const teacher = new Teacher("shaidnn", 50, "dhaka", "Math teacher");

  teacher.takeClass(2);
}
