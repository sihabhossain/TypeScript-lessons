{
  // object oriented typescript

  // class Animal {
  //   constructor(
  //     public name: string,
  //     public species: string,
  //     public sound: string
  //   ) {}

  //   makeSound() {
  //     console.log(`The ${this.name} says ${this.sound}`);
  //   }
  // }

  // const dog = new Animal("German Shepard", "German", "Ghew ghew");
  // const cat = new Animal("Persian", "cat", "meow");

  // cat.makeSound();

  // trying out myself
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(
        `this animal specie is ${this.species} and sounds like ${this.name} `
      );
    }
  }

  const cat = new Animal("cat", "tabby", "meowwwwwww");

  cat.makeSound();
}
