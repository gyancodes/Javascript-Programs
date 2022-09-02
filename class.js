class Car{
    constructor(name)
    {this.brand = name}

    present(){
        return 'I have a ' + this.brand;
    }

}

Car = new Car("Buggati");
Car.present();

console.log(Car.present());