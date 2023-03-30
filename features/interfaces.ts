//CLASS-7.1- Without using Interfaces........

// const oldCivic={
//     name:'civic',
//     year:2020,
//     broken: true
// };


// const printVehicle=(vehicle:{name:string,year:number,broken:boolean})=>{

//     console.log(`Name:${vehicle.name}`)
//     console.log(`Year:${vehicle.year}`)
//     console.log(`Broken:${vehicle.broken}`)
// }

// printVehicle(oldCivic);


//CLASS-7.2- With Interfaces....

// interface Vehicle{
//     name:string,
//     year:number,
//     broken:boolean
// }

// const oldCivic={
//     name:'civic',
//     year:2020,
//     broken: true
// };


// const printVehicle=(vehicle:Vehicle)=>{

//     console.log(`Name:${vehicle.name}`)
//     console.log(`Year:${vehicle.year}`)
//     console.log(`Broken:${vehicle.broken}`)
// }

// printVehicle(oldCivic);



// CLASS-7.3- Interfaces Extended

// interface Vehicle{
//     name:string,
//     year:number,
//     broken:boolean
//     summary():string;
// }

// const oldCivic={
//     name:'civic',
//     year:2020,
//     broken: true,
//     summary():string{
//         return `Name: ${this.name}`
//     }
// };


// oldCivic.summary();
// const printVehicle=(vehicle:Vehicle)=>{
//     console.log(vehicle.summary())
// }

// printVehicle(oldCivic);


// CLASS-7.4- Interfaces Extended


// interface Reportable{
//     summary():string;
// }

// const oldCivic={
//     name:'civic',
//     year:2020,
//     broken: true,
//     summary():string{
//         return `Name: ${this.name}`
//     }
// };


// const printSummary=(item:Reportable)=>{
//     console.log(item.summary())
// }

// printSummary(oldCivic);



// CLASS-7.5: Interfaces Extended

interface Reportable{
    summary():string;
}

const oldCivic={
    name:'civic',
    year:2020,
    broken: true,
    summary():string{
        return `Name: ${this.name}`
    }
};


const softDrink={
    color:'brown',
    carbonated:true,
    sugar:40,
    summary():string {
        return `My drink has Sugar Amount of: ${this.sugar}`
    }
}


const printSummary=(item:Reportable)=>{
    console.log(item.summary())
}

printSummary(oldCivic);
printSummary(softDrink);
