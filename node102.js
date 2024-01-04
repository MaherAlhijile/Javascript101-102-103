class Vehicle {
    constructor(name, manufacture, id) {
        this.name = name;
        this.manufacture = manufacture;
        this.id = id;
    }
}

class Car extends Vehicle {
    constructor(name, manufacture, id, carType) {
        super(name, manufacture, id);
        this.carType = carType;
    }

}


class Plane extends Vehicle {
    constructor(name, manufacture, id, planeType) {
        super(name, manufacture, id);
        this.planeType = planeType;
    }

}

class Employee  {
    constructor(name, id, dateOfBirth) {
        this.name = name;
        this.id = id;
        this.dateOfBirth = dateOfBirth;

    }
}

class Driver extends Employee{
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, manufacture, id);
        this.id = id;
        this.dateOfBirth = dateOfBirth;
        this.licenseID = licenseID;
    }
}

class Pilot extends Employee{
    constructor(name, id, dateOfBirth, licenseID) {
        super(name, manufacture, id);
        this.id = id;
        this.dateOfBirth = dateOfBirth;
        this.licenseID = licenseID;
    }
}

class Reservation{
    constructor(reservationID, vehiclesId , employeeId , reservationDate) {
        this.reservationID =reservationID;
        this.vehiclesId = vehiclesId;
        this.employeeId = employeeId;
        this.reservationDate = reservationDate;
    }
}


let car1 = new Car("camery", "a", "0", "gas");
let car2 = new Car("camery", "b", "1", "gas");
let car3 = new Car("camery", "c", "2", "gas");

let plane1 = new Plane("panery", "a", "0", "gas");
let plane2 = new Plane("panery", "a", "1", "gas");

