{
  // mapped types
  const arrayOfNumbers: Array<number> = [1, 2, 3];

  const arrayOfString: Array<string> = arrayOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrayOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString = {
    height: string;
    width: string;
  };
}
