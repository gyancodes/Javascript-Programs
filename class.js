class Car{
    constructor(name)
    {this.brand = name}

    present(){
        return 'I have a ' + this.brand;
    }

}

mycar = new Car("Buggati");
mycar.present();

console.log(mycar.present());