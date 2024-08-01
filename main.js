/*console.log("hi main.js");
const sName = confirm("Are You Amila Silva? ");
if (sName == true) {
    let yName = prompt('Enter Your Age?', '50');//Add to Value
    console.log("Name is : " + yName);
} else {
    alert("Wrong Details Added!");
}

console.error("This is an error");


let a ={
    name: 'Supun',
    city : 'Galle',
    salary : 32000,
}

let b ={
    name: 'Supun',
    city : 'Galle',
    salary : 32000,
}

let c ={
    name: 'Chandana',
    city : 'Matara',
    salary : 32000,
}

let d ={
    name: 'Wellappili',
    city : 'Hambantota',
    salary : 32000,
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)

console.log("---------------")

console.log({a,b,c,d});

console.log("---------------")

console.log(a,b,c,d);

console.log("---------------")

console.table({a,b,c,d});



let aa = 'Supun Welalapili';
let bb = 232;
let cc = true;
let dd ;
let ff =null;
let gg = 22n;

console.log(typeof aa) //String
console.log(typeof bb) //Number
console.log(typeof cc) //boolean
console.log(typeof dd) //Undefined
console.log(typeof ff) //Object
console.log(typeof gg) //bigint

let tt,ttt,tttt;
tt=ttt=tttt=2024;
console.log(tt,ttt,tttt)

const  myName = "Supun Wellappili Galle";
console.log(myName);


console.log(myName[0]);
console.log(myName.substring(2,7));
console.log(myName.split('W'))//
console.log(myName.lastIndexOf('W'))//6
console.log(myName.charAt('12'))//p
console.log(myName.endsWith('Galle'))//true
console.log(myName.replace('Galle','Matara'))//Supun Wellappili Matara
console.log(myName.length)//22


console.log("--------------Arrays--------------");

let s = ['supun',1990,18.14,true,[12,43,54,98]];
console.log(s)
console.log(s[4]);//[12,43,54,98]
console.log(s[4][1]);//43
console.log(s.indexOf(1990))//1
console.log(s.reverse())
let q = 'Hambantota'.split() //Add
console.log(s.concat(q))
q[1] ='Australia'; //New Array Added
console.log(q)
s.unshift("Hambantota");
console.log(s)*/


function displayName() {
    console.log("Supun Wellappili function called")
}

function displayName(name) {
    console.log(name)
}

function displayName(address,age) {
    console.log(address+" "+age)
}


displayName();
displayName("Supun Wellappili");
displayName("Galle", 10);


console.warn("ddvdsvd")
console.error("it is error")


/*let namee = prompt("Enter Your Name?");
 console.log(namee);
 */

 let a =123;
 console.log(a);
 console.log("type of :"+typeof(a))

 let b ="Galle IJSE branch"
 console.log(b);
 console.log("type of :"+typeof(b));

 let c = true;
 console.log(c);
 console.log("type of :"+typeof(c));

 //(2^53) -1
 let d = 254552n
 console.log(d);
 console.log("type of :"+typeof(d));

 let e = null;
 console.log(e);
 console.log("type of :"+typeof(e));

 let f;
 console.log(f);
 console.log("type of :"+typeof(f));

 console.log(e==f);
 console.log(e===f);



 //Create Function
const abc = (firstName, age) => {
    console.log("Your Name is : "+firstName+ " ---- age is : "+age);
    console.log(`Your Name is : ${firstName} ---- age is : ${age}`);
}

abc("supunz",23);



//Create Object
let ob = {
    yourName : "Supun",
    age : "21",
    address : "Galle",
    salary : "15000"
}

console.log(ob.yourName+" "+ ob.age+" "+ ob.address+" "+ob.salary); 


//Create Array
let arr = [12,34,23,43,13,"supun",23,34,true,"Galle",23.43];
console.log(arr);
console.log(arr[3]);
console.log(arr[5]);

let x = "123";
console.log(x + 1); //1231
console.log(typeof(x));

let y =123;
console.log(y+1);
console.log(typeof(y));

let v = "123hjgh";
v = Number(v);
console.log(v);//NaN(Not a Number)

//
let vv = "123hjgh";
v = parseInt(v);
console.log(v);//NaN(Not a Number)
