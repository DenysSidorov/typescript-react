let x: number = 10; // number
let hello: string = "hello world"; // string
let isValid: boolean = true; // boolean
let list: number[] = [10, 20, 30]; //array of numbers
let names: Array<string> = ["Tom", "Bob", "Alice"]; // array of strings, alternative
let a: undefined = undefined; // undefined
let b: null = null; // null
let someVar: any = "hello"; // any

// tuples (кортеджи)
let userInfo: [string, number];
userInfo = ["Tom", 28];

// enums
enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;


let newArr: Array<string> = ['1', '2'];

console.log(newArr, ' === ');

export default {} ;

let id : number | string;
id = "1345dgg5";
console.log(id); // 1345dgg5
id = 234;
typeof id;