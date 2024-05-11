// falsy values
// false, 0, -0, Bigint 0n , "", null , NaN

// truthy values all except falsy values
// "0", "false"," ", [], {}, function(){}

const userEmail = []

if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyobj = {}

if (Object.keys(emptyobj).length===0) {
    console.log(`Object is empty`);
}


//Nullish Coalescing Operator(??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10  //check the safety of null 

val1 = undefined ?? 15

val1 = null ?? 10 ?? 20  // first value is assigned

console.log(val1)

const iceTea = 100

iceTea==100 ? console.log(`100 rs`) : c