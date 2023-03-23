// Type Annotations
const apples:number=5

// built in objects
let now: Date = new Date();

let nothing=undefined;
let Nothing=null;

console.log("undefined:",typeof nothing) //
console.log("null:",typeof Nothing) // object - known issue in javascript

// Arrays:
let colors: string[]=['red','blue','pink']

// Classes:
class Car{

}

let audi:Car= new Car();

// Object literal
let point:{x:number;y:number} ={
    x:10,
    y:20
};

// Function

const logNumber:(i:number)=> void = (x:number) =>{
    console.log(logNumber);
}


// When to use annotations
// 1) Function that returns the 'any' type
const json='{"x":10,"y":"Hello"}'
const coordinates = JSON.parse(json);
console.log(coordinates)

// Fixing the any  type
const coordinates_fixed:{x:number,y:string}=JSON.parse(json);


// Delayed initialization
// 1.Type inference does'nt work and implicitly it is assigned a any type
let book;
book="How to win and Influence people";


// Variable whose type cannot be inferred
let numbers=[10,-1,12];
// let numberAboveZero=false;
// Can be fixed 
let numberAboveZero: boolean|number=false

numbers.forEach((x)=>{
    // console.log(numbers[i])
    console.log(x)
    if(x>0)
    numberAboveZero=x;
    // Ts wants x to be boolean 
})
