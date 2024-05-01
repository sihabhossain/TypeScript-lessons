// normal function
function calculate (num1:number, num2:number):number{
    return num1 + num2;
}

calculate(1,3)

// arrow function
const calculate2 =(num1:number,num2:number):number=>{
    return num1 + num2;
}

calculate2(1,2)


// method creating in object
const sihab ={
    name: 'Sihab Hossain',
    balance: 0,
    addBalace(balance:number):string {
        return `my new balance is ${this.balance + 1000}`
    }
}



// arrays
const arr:number[] = [1,3,123,4];

const newArr: number[] = arr.map((elem : number): number => elem*elem)