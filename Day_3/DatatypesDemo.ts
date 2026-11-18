/* 
1) Premitive Data Types(Built in)- aloww to store single value
Number
String
Boolean
null
undefined
Any
Union Type
Void 

2)Non Premitive Data Types(Objects) - allow to store multiple value
Array
Class
Function
Interface
Touple etc...
*/

// Number

/* let age:number=25;
let price=25.5
let big=34567899;

console.log("Age:",age);
console.log("Price:",price);
console.log("big:",big);

console.log(typeof age);
console.log(typeof price);
console.log(typeof big); */


//2. String

1. /* single quote('')
2. Double quote("")
3. Backtick(``) */

let firstName:string="John";
let lastName:string='Kenedy';

//Hello John Kenedy

//let greeting:string="Hello",firstName,lastName --it will give error here
/* let greeting:string=`Hello ${firstName} ${lastName}`; //for parmeterizing
console.log(greeting) */

//3. Boolean Type

/* let isStudent:boolean=true;
let hasJob:boolean=false;

console.log(isStudent);
console.log(hasJob);
 */

//4. NULL and Undefined
/* let emptyValue:null=null;
//emptyValue=30; not allowed
let notAssigned:undefined=undefined;

console.log(emptyValue);
console.log(undefined);


let price:number;
console.log(price); //undefined */

//5. ANY TYPE - allows any type of value

/* let value:any="Welcome";
console.log(value);

value=100;
console.log(value);

value=true;
console.log(value); */

//6. UNION Type

/* let id:number | string | boolean;

id="ABC12345"
console.log(id);

id="12345"
console.log(id);

id=true
console.log(id); */

// 6. VOID Type -used for functions that dont return anything

/* function show():void
{
    console.log("Welcome");
}
show(); */

function sum(x:number, y:number):number
{
    return(x+y);
}

let res:number=sum(20,20);

console.log(res);

//output - tsx Day_3\DatatypesDemo.ts