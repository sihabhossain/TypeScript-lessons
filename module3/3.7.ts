{
  class Counter {
    static count: number = 0;

    static increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //   const instense1 = new Counter();
  console.log(Counter.increment());

  //   const instense2 = new Counter();
  console.log(Counter.increment());

  //
}
