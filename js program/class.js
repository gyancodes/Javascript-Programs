class Car{
    constructor(name)
    {this.brand = name}

    present(){
        return 'I have a ' + this.brand;
    }

}

// Car = new Car("Buggati");
// Car.present();

let myCar = new Car("Bugatti");
myCar.present();

// console.log(myCar.present());
// alert(Car.present());