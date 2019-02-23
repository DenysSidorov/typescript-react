// types of parameters, return value from function
let add = function (a: number, b: number) : number {
    return a + b;
}


// function returns void by default
function add2(a: number, b: number): void {
    console.log(a + b);
}


// always amount params
function getName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
getName("Иван", "Михайлович", /* "Кузнецов" */); // error, more params
getName("Иван", 'B'); // error, less params


// unnecessary params
function getName2(firstName: string, lastName?: string) {
}
getName2('one', 'two');


// params by default
function getName3(firstName: string, lastName: string="Иванов") {
    return firstName + " " + lastName;
}
getName3("Вася", 'M'/**/); // Вася Иванов

// rest in params
function addNumbers(firstNumber: number, ...numberArray: number[]): number {
    return 5;
}

// op has arrow function with params and return types
let op: (x:number, y:number) => number;

let myAdd: (x: number, y: number)=>number =
    function(x: number, y: number): number { return x+y; };

export default {};