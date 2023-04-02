
// CLASS-8.1: Introduction to Classes----------

// class Vehicle{
//     public drive(): void{
//         console.log('Chugga Chugga');
//     }

//     public honk():void{
//         console.log("beep")
//     }
// }


// const vehicle=new Vehicle()
// vehicle.drive()
// vehicle.honk()


// CLASS-8.2: Classes in typescript----------


// class Mycar extends Vehicle{

//     drive(): void {
//         console.log("Boom, Boom")
//     }

//     startDrivingProcess():void{
//         this.drive();
//     }

// }

// const maruti=new Mycar();
// maruti.drive();
// maruti.honk();


// CLASS-8.3: Classes in typescript Extended-----------


// class Vehicle{
//     public drive(): void{
//         console.log('Chugga Chugga');
//     }

//     protected honk():void{
//         console.log("beep")
//     }
// }


// class Mycar extends Vehicle{

//     drive(): void {
//         console.log("Boom, Boom")
//     }

//     startDrivingProcess():void{
//         this.honk();
//         this.drive();
//     }

// }

// const maruti=new Mycar();
// maruti.drive();
// maruti.startDrivingProcess();



// CLASS-8.4: Fields in Classes----------


// class Vehicle{

//     // color:string='red'; // fields must be initalised
//     // code:number;
//     // constructor(code:number){
//     //     this.code=code;
//     // }

//     constructor(public color:string,private code:string){

//     }

//     public drive(): void{
//         console.log('Chugga Chugga');
//     }

//     protected honk():void{
//         console.log("beep")
//     }
// }


// const vehicle=new Vehicle("red","#234324");
// console.log(`color: ${vehicle.color}`)


// CLASS-8.5: Fields in Classes with inheritence------


class Vehicle{

    constructor(public color:string,private code:string){

    }

    protected honk():void{
        console.log("beep")
    }
}

class MyCar extends Vehicle {

    seats:number;
    constructor(seats:number,color:string,code:string){
        super(color,code)
        this.seats=seats;
    }

    private drive():void{
        console.log("Vmroom");
    }

    startDriving():void{
        this.honk();
        this.drive();
    }

}

const audi4=new MyCar(4,"blue","#dsffd");
console.log(audi4.color);
// console.log(audi4.code);
console.log(audi4.seats);


// CLASS-8.6: Fields in Classes with inheritence------

