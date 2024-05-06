{
  // function
  type functionType = (param1: number, param2: number) => number;

  const myCalculator: functionType = (a, b) => {
    return a + b;
  };

  const result = myCalculator(1, 2);

  console.log(result);

  //
}
