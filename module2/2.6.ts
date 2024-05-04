{
  // constraints

  interface Student {
    id: number;
    email: string;
  }

  const addStudentToCourse = <T extends Student>(student: T) => {
    const course = "Next Level";

    return {
      ...student,
      course,
    };
  };

  const student1 = addStudentToCourse({
    id: 1,
    email: "x@mail.com",
    devType: "NNNN",
  });

  const student2 = addStudentToCourse({
    id: 1,
    email: "x@mail.com",
    hasWatch: "AppleWatch",
  });
}
