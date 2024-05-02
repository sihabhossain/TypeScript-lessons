const age: number = 19;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("not adult");
}

const isAdult = age >= 18 ? "Adult" : "Not adult";

console.log({ isAdult });

const isAuthenticated = null;

const result1 = isAuthenticated ?? "guest1";
const result2 = isAuthenticated ? isAuthenticated : "guest2";

console.log({ result1 }, { result2 });

type UserDetails = {
  name: string;
  address: {
    city: string;
    road: string;
    presentAddress: string;
    permanentAddress?: string;
  };
};

const UserDetails = {
  name: "sihab",
  address: {
    city: "dhaka",
    road: "gulshan2",
    presentAddress: "baridhara",
  },
};

// const Address =
//   UserDetails?.address?.permanentAddress ?? "no permanent address";

// console.log({ Address });
