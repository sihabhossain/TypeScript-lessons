

// type alias
type Student =  {
    name: string,
    age: number,
    gender: string,
    contactNo?: string,
    address: string
}


const student1 :Student = {
    name: 'sihab',
    age: 10,
    gender: 'male',
    contactNo: '102938173',
    address: 'dhaka'
}



const student2 : Student = {
    name: 'notSihab',
    age: 110,
    gender: 'female',
    address: 'dhaka'
}


// type alias function
type Add =(num1 : number, num2 : number) => number;


const Add: Add =(num1, num2) => num1 + num2;