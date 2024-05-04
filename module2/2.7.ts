{
  // generic constraits with key of operator

  type Vehicle = {
    car: string;
    bike: string;
    yatch: string;
  };

  type Owner = keyof Vehicle;

  const person: Owner = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const User = {
    name: "sihab",
    batch: 3,
  };

  const result = getPropertyValue(User, "batch");
}
