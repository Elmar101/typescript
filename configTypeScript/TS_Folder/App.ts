console.log(
  "npm init => bizim üçün 'package.json ' fileni yaradir ve biz orda" +
    +" script objesine bezi propertiler elave ede bilerik" +
    +"meselen script{'start': 'lite-server'} yeni npm start edende lite-server start olsun"
);

console.log(
  "npm install --save-dev lite-server => package-lock.json fileni yaradir"
);

console.log(
  "npm install => etdikde ise 'package.json ' faylina baxaraq node_modules su install olur"
);

console.log("npm init => edirem bir chox ts file ichin");

console.log("tsc --init => {...}tsconfig.json objesini yaradiram");

console.log(
  "tsc => yazsam bir chox ts fileni js filesine compile edir (chevirir) "
);

console.log(
  "tsc --watch ve ya tsc -w => her defe tsc edib ts filendaki kodlari derleyib" +
    +"edim js yazlimina chevirmiyek diye edirik Starting compilation in watch mode"
);

console.log(
  "ts filesinde saq click edib console ye verilenleri visualin terminalinda de output qisminde gore bilersiz"
);

function dataType(data: any) {
  console.log(data);
}
dataType("noImplicitAny: false => Compilerde Error Olmasin ");
/*/ 
   ! => nida işarəsi verilen Html tipdeki datanin sonunda olarsa o demekdi null olmuyan datadi 
   ex - button:HTMLButtonElement  | null = document.querySelector("button")!;
   ! => nida beraberdi -> if(button){ button.addEventListener("click",()=>{console.log(" Click me ") }); }
   ! => nida işarəsi tiplərdədə olur İnterfacelerin data tiplerinde  interface İCars {name!: string}
        İCars {name!: string} => bu o demekdirki name string tipde valuedi null undefined any ve sair ola bilmez
/*/
const button1: HTMLButtonElement | null = document.querySelector("#button1")!;

button1.addEventListener("click", () => {
  console.log(" Click me ");
});

const button2: HTMLButtonElement | null = document.querySelector("#button2");
if (button2) {
  button2.addEventListener("click", () => {
    console.log(" Click if");
  });
}
// document.querySelector("#button1")! <=> if(button2)

const button3: HTMLButtonElement | null = document.querySelector("#button3")!;
let buttonFn = (ms: string) => {
  console.log(" Click me ", ms);
};

button3.addEventListener(
  "click",
  buttonFn.bind(this, "strictBindCallApply false  olarsa this yazmasaqda olar")
);

/*/
    "noUnusedLocals": true olarsa local deyisenlerin altindan sari dalqali xet çəkiləcək 
    teyin olunub istifade edilmeyib global deyişənlərdə isə yox rs kimi ama 
    funuksiada ve ya her hanasi local deyisen varsa teyn edilib istifade edilmeyibse sari xett ile bildiris
    { burdaki deyisenler localdi } meselen result
/*/
/*/
    noImplicitReturns: true olarsa bu zaman funuksia undefined deyer airsa bu zaman return ile sonlandirmaliyiq 
    undefined yeni deyeri yoxsa meselen let x; ve ya funuksia Fn(){ return; } 
    Fn funuksiasi geriye hech bir deyer qaytarmir hechne qaytarmir
/*/
let rs = buttonFn(
  "noUnusedLocals true olarsa globallarda ise deyisenin altindan xett çekilmir"
);
function noImplicitReturns(n1: number, n2: number) {
  let result: number = n1 + n2; //"noUnusedLocals": true olarsa local deyisenlerin altindan sari dalqali xet çəkiləcək
  if (n1 + n2 >= 0) {
    return n1 + n2;
  }
  return; //noImplicitReturns: true olarsa
}
