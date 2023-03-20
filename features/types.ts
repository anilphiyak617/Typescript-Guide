

const person ={
    name:"Anil"
}

class Color{

    _colorName="Pink"
    getName=()=>{
        console.log(this._colorName)
    }
}

const red= new Color(); 
// Red is inferred automatically as of type Color
