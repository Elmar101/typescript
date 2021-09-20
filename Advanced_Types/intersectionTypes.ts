console.log(".......................... type ElevationEmployee = Admin & Employee;...................");
//Intersection Types - type ElevationEmployee = Admin & Employee;

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate : Date;
}

type ElevationEmployee = Admin & Employee;  

let e1: ElevationEmployee = {
    name: "Elmar",
    privileges: ["Front End"],
    startDate: new Date()
}

console.log(".......................... interface ElevationEmployee extends Admin , Employee {} ...................");
//type ElevationEmployee = Admin & Employee; interface ElevationEmployee extends Admin , Employee {} eyni seydi

type IAdmin = {
    name: string;
    privileges: string[];
}

type IEmployee = {
    name: string;
    startDate : Date;
}

interface IElevationEmployee extends IAdmin , IEmployee{} //type IElevationEmployee = IAdmin & IEmployee

let e2: IElevationEmployee = {
    name: "Elmar",
    privileges: ["Front End"],
    startDate: new Date()
}

