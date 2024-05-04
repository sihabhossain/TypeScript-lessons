{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [1, 2, 3, 4];
  const rollNumbers: GenericArray<number> = [1, 2, 3, 4];

  //   const mentors: string[] = ["hu", "ha", "hell"];
  const mentors: Array<string> = ["hu", "ha", "hell"];

  //   const boolArray: boolean[] = [true, false];
  const boolArray: Array<boolean> = [true, false];

  //   generic in array of object

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "sihab",
      age: 19,
    },
    {
      name: "dodi",
      age: 90,
    },
  ];

  type GenericTuple<X, Y> = [X, Y];

  const Me: GenericTuple<string, string> = ["me", "him"];

  type GenericTuple2<X, Y> = [X, Y];

  type User = {
    name: string;
    email: string;
  };

  const userId: GenericTuple2<number, User> = [
    1,
    { name: "sihab", email: "@gmail.com" },
  ];
}
