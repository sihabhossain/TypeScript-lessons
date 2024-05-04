{
  // type guard

  type AlphaNeumeric = number | string;

  const add = (num1: AlphaNeumeric, num2: AlphaNeumeric): AlphaNeumeric => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    } else {
      return num1.toString() + num2.toString();
    }
  };

  const res = add("1", "2");

  console.log(res);

  //   in guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "sihab hossain",
  };

  const adminUser: AdminUser = {
    name: "kuddus",
    role: "admin",
  };

  const res2 = getUser(adminUser);
}
