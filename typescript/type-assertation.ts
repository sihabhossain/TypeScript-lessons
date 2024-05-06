let someValue: any = "this is a string";

// Syntax: value as Type
let strLength: number = (someValue as string).length;
// console.log(strLength);

let value: string | number | boolean;

value = "this is string" as string;
value = 12 as number;
value = false as boolean;
