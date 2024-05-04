{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = createArray("sihab");
  const res2 = createArrayWithGenerics<number>(1);

  interface User {
    id: number;
    name: string;
  }

  const resWithObj = createArrayWithGenerics<User>({ id: 1, name: "sihab" });

  //   tuple

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result11 = createArrayWithTuple<string, string>("sihab", "sihab");
  const res22 = createArrayWithGenerics<number>(1);

  interface User {
    id: number;
    name: string;
  }

  const resWithObj2j = createArrayWithGenerics<User>({ id: 1, name: "sihab" });

  const addStudentToCourse = <T>(student: T) => {
    const course = "Next Level";

    return {
      ...student,
      course,
    };
  };

  interface Student1 {
    id: number;
    email: string;
    devType: string;
  }

  interface Student2 {
    id: number;
    email: string;
    hasWatch: string;
  }

  const student1 = addStudentToCourse<Student1>({
    id: 1,
    email: "x@mail.com",
    devType: "NNNN",
  });
  const student2 = addStudentToCourse<Student2>({
    id: 1,
    email: "x@mail.com",
    hasWatch: "AppleWatch",
  });
}
