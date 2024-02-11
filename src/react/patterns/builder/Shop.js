// https://www.dofactory.com/javascript/design-patterns/builder
function Shop() {
    this.construct = function(builder) {
        builder.step1();
        builder.step2();

        return builder.get();
    }
}

function Car() {
    this.doors = 0;

    this.addParts =  function() {
        this.doors = 4;
    }

    this.say = function() {
        console.log(`I am a ${this.doors}-door car.`);
    }
}

function CarBuilder() {
    this.car = null;

    this.step1 = function() {
        this.car = new Car();
    }

    this.step2 = function() {
        this.car.addParts();
    }

    this.get = function() {
        return this.car;
    }

}

function Truck() {
    this.doors = 0;

    this.addParts = function() {
        this.doors = 2;
    }

    this.say = function() {
        console.log(`I am a ${this.doors}-door truck`);
    }
}

function TruckBuilder() {
    this.null;

    this.step1 = function() {
        this.truck = new Truck();
    }

    this.step2 = function() {
        this.truck.addParts();
    }

    this.get = function() {
        return this.truck;
    }
}


function run() {
    const shop = new Shop();
    const carBuilder = new CarBuilder();
    const truckBuilder = new TruckBuilder();

    let car = shop.construct(carBuilder);
    let truck = shop.construct(truckBuilder);

    car.say();
    truck.say();
}

run();