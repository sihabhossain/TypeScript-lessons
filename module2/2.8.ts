{
  // basic promise

  type Something = {
    something: string;
  };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "sihab" };

      if (data) {
        resolve(data);
      } else {
        reject(data);
      }
    });
  };

  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };

  showData();

  //   api promise

  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const getData = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
    // console.log(data);
  };

  getData();
}
