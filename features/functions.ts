

// const add_2 =(a,b)=>{
//     return a+b;
// }
// Arrow funtions with Type-Annotations
const add =(a:number,b:number):number =>{
    return a+b;
}

// Anonymous Function with type annotations
const multiply = function(a:number,b:number){
    return a*b;
}

function divide(a:number,b:number){
    return a/b;
}


// Functions with void return Type
// 1.undefined can be returned or void
const logger=(message:string):void=>{
    console.log(message);
    // return undefined;
    // return void;
}

const throwError=(message:string):never=>{
    throw new Error(message)
}

// throwError("There is error in your system");

// Destructuring with TS annotations:
const todaysWeather={
    date:new Date(),
    weather:'cloudy'
}

const logWeather =({date,weather}:{date:Date,weather:string})=>{
    console.log(date)
    console.log(weather)

}

logWeather(todaysWeather);


