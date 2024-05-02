{
  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("nothing");
    }
  };

  searchName(null);

  const getSpeedInMeters = (value: unknown) => {
    if (typeof value === "number") {
      const convertedValue = (value * 1000) / 3600;
      console.log(convertedValue);
    } else if (typeof value === "string") {
      const [result] = value.split(" ");
      const convertedValue = (parseFloat(result) * 1000) / 3600;
      console.log(convertedValue);
    }
  };

  getSpeedInMeters("100 ms");

  const throwError = (msg: string): never => {
    throw new Error("tf happend bro");
  };

  throwError("bru");
}
