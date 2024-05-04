{
  // generic interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  //   types
  interface SamsungWatch {
    brand: string;
    model: string;
    display: string;
  }

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engine: string;
  }

  const PoorDev: Developer<SamsungWatch> = {
    name: "sihab",
    computer: {
      brand: "ASUS",
      model: "12H",
      releaseYear: 2020,
    },
    smartWatch: {
      brand: "Samsung",
      model: "PG",
      display: "OLED",
    },
  };

  const RichDev: Developer<AppleWatch, YamahaBike> = {
    name: "Notsihab",
    computer: {
      brand: "HP",
      model: "12HH",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "APPLE",
      model: "HD",
      heartTrack: true,
      sleepTrack: true,
    },

    bike: {
      model: "yamaha",
      engine: "200cc",
    },
  };
}
