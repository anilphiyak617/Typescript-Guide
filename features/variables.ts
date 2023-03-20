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