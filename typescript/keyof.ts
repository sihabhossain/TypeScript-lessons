{
  // keyof

  interface Car {
    name: string;
    model: string;
    year: number;
    isEV: boolean;
  }

  const myCar: Car = {
    name: "Tesla",
    model: "Y",
    year: 2020,
    isEV: true,
  };

  const getPropertyValue = (obj: Car, key: keyof Car) => {
    console.log(obj[key]);
  };

  getPropertyValue(myCar, "model");

  //
}
