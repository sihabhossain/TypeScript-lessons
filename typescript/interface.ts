{
  // interface

  interface Car {
    name: string;
    model: string;
    year: number;
    isEV: boolean;
    startEngine(): void;
    stopEngine(): void;
  }

  const myCar: Car = {
    name: "Marcedes Amg",
    model: "GT",
    year: 2020,
    isEV: false,
    startEngine() {
      console.log("engine started");
    },
    stopEngine() {
      console.log("engine stopped");
    },
  };


  myCar.startEngine()

  //
}
