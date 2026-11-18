// Variable:
// var,let,const
//Syntax: keyword variableName :data type-value
// Ex:    var age:number=30
//EX:     var age=30

/* var age=30;
console.log(age); */

// var vs let vs const
//---------------------------------------
/* 
1)Scope
2)Declaration/Value Assignment
3)Re-Declaration
4)Re-Initialization/Reassignment
5)Hoisting
 */

//var - dont recomment to use. Has function scope
//let- When need to change value of variable
//const- use const when the variable value should not be change

//Scope(Functional(var) & Block scope(let,const))
//--------------------------
/* function test()
{
Function scope

}
 */



/* if(var1>var2)
{

}
 */
// Var(Functional Scope)
//------------------------
/* function varSCope()
{
    if(true)
    {
        var msg="Hello world";
        //console.log(msg)
    }
     console.log(msg)
}

varSCope(); */


//Block Scope(let, const)
//------------------------------------------------------------
/* function blockSCope()
{
    if(true)
    {
        let msg="Hello world";
        const greet="Hello const";
        console.log(msg);
        console.log(greet);
    }
     //console.log(msg); //cannot accessed out of block
    // console.log(greet); //cannot accessed out of block
}

blockSCope(); */


 //Scope Difference
 //---------------------------------------------------------

/* function scopeDiff()
{
    if(true)
    {
        var num1=10;
        let num2=20;
        const num3=30;
        // console.log(num1);
        // console.log(num2);
        // console.log(num3);
    }
    console.log(num1);    // Can be accessed
        console.log(num2); // can not access - block scope
        console.log(num3); // can not access - block scope
}

scopeDiff(); */



// 2) Declaration/ Value Assigment  

// Example1: Var----------------var can be seclared without initialization
var x; // declaration
console.log(x);     // output  - Undefined
x=30 //initialization

// Example2: let can be declared withou initialization

/* let y;
console.log(y);
y=30;
console.log(y); */

// Example3: const must be initialized at the time of declaration

/* //const z; //incorrect
const z=50;
console.log(z) */


//Re-Declaration
//var - allows redeclation
//let and const - not allow

//Example 1: Var allows dedeclation

/* var city="New York";
var city="Los Angeles";
console.log(city);
 */

//Example 2: let - not allowed re-declaration
// Cannot redeclare block-scoped variable 
/* let country="India"; 
let country-"US"; */

//Example 3: const - not allowed re-declaration
//Cannot redeclare block-scoped variable
/* const planet="earth";
const planet="Mars"; */

//4) Re-initialization/Reassignment
//var and let - Re- assignement Allowed
//const - Re-assignment not allowed

// Example 1: var allows re-assignment
/* 
var age=25;
age=30;
console.log(age); */

// Example 2: let allows re-assignment

/* let age=25;
age=30;
console.log(age); */

// Example 3: const not allows re-assignment

/* const age=25;
age=30;
console.log(age); */


//5) Hoisting

/* console.log(a); //undefined output
var a=10; */


/* console.log(a); // error output -Not initialized for let and const
let a=10; */