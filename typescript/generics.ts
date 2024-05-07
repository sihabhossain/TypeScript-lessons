{
  // generic array
  type GenericArray<T> = Array<T>;

  const numberArr: GenericArray<number> = [1, 23, 4, 5, 23];

  const stringArr: GenericArray<string> = ["sihab"];

  const booleanArr: GenericArray<boolean> = [true, false];

  //   interface with generics
  interface IUser<T, U> {
    name: string;
    age: number;
    profileData: T;
    id: U;
  }

  const User1: IUser<
    {
      bio: string;
      image: string;
    },
    number
  > = {
    name: "sihab hossain",
    age: 20,
    profileData: {
      bio: "this is bio",
      image: "image",
    },
    id: 1,
  };

  const User2: IUser<
    {
      bio: string;
      pronouns: string;
    },
    number
  > = {
    name: "sihab hossain",
    age: 20,
    profileData: {
      bio: "this is bio",
      pronouns: "image",
    },
    id: 2,
  };

  //   function with generics

  const showMessage = <T>(param: T): T => {
    return param;
  };

  const result = showMessage<number>(100);
  //   console.log(result);

  //   constraints
  const sumNumber = <T extends number>(num: T) => num + num;
  console.log(sumNumber<number>(1));

  //
}
