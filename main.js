console.log("hi main.js");
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
