console.log("----------------------Types Guards **** union types || ---------------------------");
type Combine = string | number ;

function add(a:Combine , b:Combine, c:Combine) {
    if(typeof a === "string" || typeof b === "string" || typeof c === "string"){
        return a as string + <string>b + c.toString();
    }
    return a + b +c ;
}

console.log("-- union types Combine number cem: ",add(1,2,3));
console.log("-- union types Combine string : ",add("string - ",2,3));

//*****************************************************************************************************/*/
console.log("----------------------Types Guards **** union types || ---------------------------");
// A = {1,2,3,4,5,6,7} B = {5,6,7,8,9} => A & B = { 1,2,3,4,5,6,7,8,9 } 
//A & B => burada ikisindeki properitiler hamisi olmalidi 

type AdminEmployee = { 
    name: string; 
    privileges: string[] 
};
type EmployeeType = { 
    name: string; 
    employees: string[] ; 
    startDate: Date; 
    endDate?: Date 
}

/*/

    type EM_AND = AdminEmployee & EmployeeType  => {
        name: string,
        privileges: string[],
        employees: string[] ;
        startDate: Date; 
        endDate?: Date 
    } 

/*/
type EM_AND = AdminEmployee & EmployeeType ;

let em1: EM_AND = {
    name: "Elmar",
    privileges: ["FRONT END"],
    employees: ["Ruslan","Ceyhun"],
    startDate: new Date()
}

// A = {1,2,3,4,5,6,7} B = {5,6,7,8,9} => A | B = { 1,2,3,4,5,6,7,8,9 } 
// A = {1,2,3,4,5,6,7} B = {5,6,7,8,9} => A | B = { 1,2,3,4,5,6,7 }
// A = {1,2,3,4,5,6,7} B = {5,6,7,8,9} => A | B = { 4,5,6,7,8,9 }
// A | B => Burada iki Çoxluqdan "Birinin" bütün properitileri olmalidi Ən azindan digerinden bir neçesi olmuyada biler

/*/ 
   type EM_OR = AdminEmployee | EmployeeType ;

   1 ci hall => TA typindaki butun properitileri saxliyiram TB deki ise bezilerini yaziram heç yazmiyada bilerdim
   type EM_OR = TA | TB => 1 ci hall {
       name: string , 
       privileges: string[] , 
       employees: string[], 
       startDate: Date, 
   } = {
       name: string , 
       privileges: string[] ,  
   } 
   
   2 ci hall => TB typindaki butun properitileri saxliyiram TA deki ise bezilerini yaziram heç yazmiyada bilerdim
   type EM_OR = TA | TB = 2 ci hall {
       name: string ,
       employees: string[], 
       startDate: Date,
       privileges: string[] ,
   } = {
       name: string ,
       employees: string[], 
       startDate: Date
   }

/*/
type EM_OR = AdminEmployee | EmployeeType ;

let em2: EM_OR = {
    name: "Elmar",
    employees: ["Ruslan","Ceyhun"],
    startDate: new Date()
}
 

 



//********************************/ FUNUKSIALARDA | ve & typlar hakda  /***************************************

console.log("--------------------FUNUKSIALARDA | ve & typlar hakda  ------------------------------");
type TA = { 
    name: string , 
    privileges: string[] 
} ;

type TB = { 
    name: string , 
    employees: string[], 
    startDate: Date, 
    endDate?: Date | string 
} ;

//type unionEmploye_AND_Type = TA & TB ;  funuksianin parametri - objecte olduqu kimidi

type unionEmploye_AND_Type = TA & TB ;

function printEmployeeInfo(em:  unionEmploye_AND_Type){
    console.log("employee name: ",em.name); 
    console.log("employee employees: ", em.employees); 
    console.log("employee startDate: ", em.startDate); 
    console.log("employee endDate: ", em.endDate); 
    console.log("employee privileges: ", em.privileges); 
}
printEmployeeInfo(em1);

/*/

    type unionEmploye_OR_Type = TA | TB ; bunda if ile yoxlanmalidir  => Bəs niyə?

    NiyəSi ise => if ilə yoxlanmalidir çünki - em OBJECTİ ya type TA di yada type TB dir
    gələn properitilər yoxlanmalidirki TA nin bütün properitileri en azindan varmi TB kilər olada bilər olmayada 
    AMA ƏN AZINDAN TA NIN HAMISI OLMALIDI BUNUN ƏKSİDƏ KEÇƏRLİDİ AÇAQİDAKİ QAYDANİDA OXU  
    yaxud TB nin properitilərinin hamisi varmi TA dakilar olada bilər olmayada ama TB dəkilərin hamisi olmalidi

/*/
type unionEmploye_OR_Type = TA | TB ;

function printEmployeeInformation(em:  unionEmploye_OR_Type){
    console.log("employee name: ",em.name); 
    if("employees" in em){ console.log("employee employees: ", em.employees); }
    if("startDate" in em){ console.log("employee startDate: ", em.startDate); }
    if("endDate" in em){ console.log("employee endDate: ", em.endDate); }
    if("privileges" in em){ console.log("employee privileges: ", em.privileges); } 
}
printEmployeeInformation(em1);
printEmployeeInformation(em2);
printEmployeeInformation({name: "Eldar", employees:["Sinan","Akif"], startDate: new Date(), endDate: new Date().toISOString()});

/**************************************** Class union types and intersection types *****************************************/
console.log("****************************** Class union types and intersection types ***********************************");

class Car {  
    drive(){ console.log("DRIVING .....") }
    marka(m: string){ console.log("CARS MARKA : ", m); }
}

class Truck {
    drive(){ console.log("DRIVING TRUCK ........")}
    loadCargo(amount: number){ console.log("Load Cargo Amount = " + amount); }
}

type Vehicle_OR_Type = Car | Truck ;

let c = new Car();
let t = new Truck();

function vehicle_Fn_OR_TYPE(v: Vehicle_OR_Type){
    v.drive();
    if("loadCargo" in v){ v.loadCargo(1000); }
    if(v instanceof Car){ v.marka("BMW") }
}

vehicle_Fn_OR_TYPE(c);
vehicle_Fn_OR_TYPE(t);

type Vehicle_AND_Type = Car & Truck ;

function vehicle_Fn_AND_TYPE(v: Vehicle_AND_Type){
    v.drive();
    if(v instanceof Truck){ v.loadCargo(500); }
    if(v instanceof Car) { v.marka("BMW") }  
}

vehicle_Fn_AND_TYPE(<Vehicle_AND_Type>c);
vehicle_Fn_AND_TYPE(t as Vehicle_AND_Type);

/*/
&=> saxladiqi data ikisinin birlesmesidi Car ve Truckin Ona gore type casting edirik functiona parametir olaraq oturende
vehicle_Fn_AND_TYPE(c) asahaqidaki errorla qarsilasiriq ve hemen type cast edirik !!!!
-'Car' tipi argüman, 'Vehicle_AND_Type' tipindeki parametreye atanamaz.'LoadCargo' özelliği 'Car' türünde eksik, 
  amma 'Truck' tipinde gerekli 

  if(v instanceof Truck){ v.loadCargo(500); } bele yoxda=>  v.loadCargo(500);  bele yazilsa ERROR !!!
  *** => v.loadCargo(500) => TypeError: v.loadCargo is not a function
/*/


/*/
                            - Property 'loadCargo' does not exist on type 'Vehicle'.
        v.loadCargo(1000);    
                            - Property 'loadCargo' does not exist on type 'Car'
        if("loadCargo" in v){ v.loadCargo(1000); } ==== if(v instanceof Truck){ v.loadCargo(1000); }
 /*/


 //****************************************  union types with interfaces ***********************************/*/
console.log("***********************  Discriminated union types with interfaces **************************");
/*/
    Custom union Type interfacelərdən düzəldərkən if("propertyName" in ObjectName) js kimi ts dədə yaza bilərik 
    AMMA if(parametrObject instanceof interfaceName ) bu Şəkildə yaza bilmirik ERROR LA qarşılaşırıq
    Bunun Üçün Biz "Discriminated union" Yazlından istifadə edə bilərik 
/*/
 interface Birds {
    type:'birds' ;                    // lideral type
    flyingSpeed: number;
}

interface Hours {
    type:'hours' ;                   //lideral type bosluq bile switch -in case de nezere alinir !!!
    runningSpeed: number;
}

type Animals = Birds | Hours;

function animalsFn_OR_union_type(animal: Animals){
    //if("flyingSpeed" in animal){ console.log("animal flyingSpeed = " + animal.flyingSpeed);}
    //if("runingSpeed" in animal){ console.log("animal runningSpeed = " + animal.runningSpeed);}
    switch(animal.type){// hemise case deki ifadeni saxlayir !!!
        case 'birds': console.log("animal flyingSpeed = " + animal.flyingSpeed); break;
        case 'hours': console.log("animal runningSpeed = " + animal.runningSpeed); break;
    }
}

let a: Animals = {
    type: 'birds',
    flyingSpeed: 120,
}
animalsFn_OR_union_type( a );
/*/
    let a: Animals = {
        type: 'birds', => type: 'birds' - olduquna görə "a:Birds" type: 'hours' olsaydi "a:Hours"

        flyingSpeed: 120,
                                     Object literal may only specify known properties,
        runningSpeed: 45 => ERROR => 
                                     and 'runningSpeed' does not exist in type 'Birds'                           
    }
/*/

//********************************| example discIriminated Type Reactin useReduceri|******************************** *//
console.log("**************** EXAMPLE DISCIRIMINATED TYPE *******************************************")

interface IinitialState { type: string ; n1: number ; n2: number ; }
interface Iaction{ (a: number, b: number): number; }

let ReducerFn = (state: IinitialState, action: Iaction) =>{
    switch (state.type){
        case 'TOPLAMA':
            console.log( "sum is  " , action(state.n1, state.n2) );
            break;

        case 'ÇIXMA':
            console.log( "diffirent is " ,action(state.n1, state.n2) );
            break;

        case 'VURMA':
            console.log( "multiple is " , action(state.n1, state.n2) );
            break;

        case 'BöLMƏ':
            console.log( "divide is " ,action(state.n1, state.n2) );
            break;
    }
}

let Cem: IinitialState = {   type: 'TOPLAMA', n1: 2,  n2: 4 }
let Çıxma: IinitialState = { type: 'ÇIXMA',   n1: 6,  n2: 9 }
let Vurma: IinitialState = { type: 'VURMA',   n1: 6,  n2: 9 }
let Bölmə: IinitialState = { type: 'BöLMƏ',   n1: 6,  n2: 9 }

let SUM:Iaction = (a:number, b:number) => a+b;
let DIFFIRENT: Iaction = (a:number, b:number) => a - b;
let MULTIPLE: Iaction = (a:number, b:number) => a * b;
let Divide: Iaction = (a:number, b:number) => a / b;

ReducerFn(Cem, SUM );
ReducerFn(Çıxma, DIFFIRENT );
ReducerFn(Vurma, MULTIPLE );
ReducerFn(Bölmə, Divide );

