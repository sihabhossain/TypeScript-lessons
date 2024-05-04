{
  // type assertation
  let anything: any;

  (anything = "next level 2"), (anything = 2), anything as number;

  const KgToGram = (value: string | number) => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `converted value in string is ${convertedValue}`;
    } else if (typeof value === "number") {
      const convertedValue = value * 1000;
      return convertedValue;
    }
  };

  const result1 = KgToGram(1000) as number;
  const result2 = KgToGram("100") as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
