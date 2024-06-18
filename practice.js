var myDate =new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toTimeString())
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2023,7,23)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)

// console.log(Math.round(myTimeStamp/1000))
// console.log(`Hello World here are the number of seconds ${myTimeStamp} no these are miniseconds`)

/*************************************************/
//Arrays

const myArr = [0,1,2,3,4,5,6]

// console.log("A",myArr)

// console.log(myArr.includes(0))

// console.log(myArr.indexOf(5))
// var newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log( typeof newArr)

//slice splice

// var myn1=myArr.slice(1,3)
// console.log(myn1)
// console.log("B",myArr)

// var myn2=myArr.splice(1,3)
// console.log(myn2)
// console.log("c",myArr)

var marvelHero = ["thor","ironman","spiderman"]
var dcHero = ["superman","flash","batman"]

// marvelHero.push(dcHero)
// console.log(marvelHero).

var allHero = marvelHero.concat(dcHero)

// console.log(allHero)

var newAllHero = [...marvelHero,...dcHero]
// console.log(newAllHero)

const anotherArray=[1,3,5,[3,7,5],4,8,[3,5,[33,3,77]]]

const realAnotherArray = anotherArray.flat(Infinity)

// console.log(realAnotherArray)

// console.log(Array.isArray(realAnotherArray))

// console.log(Array.from("SAWAN"))

/************************** */

/*objects */

//singleton
//object.create

const mySym=Symbol("key1")

const newObj={
    name:"sawan",
    age:19,
    [mySym]:"mykeyy1",
    "full name":"SAWAN K",
    location:"Delhi",
    email:"sawan@gmail.com",
    isLogedIn:false
}

// console.log(newObj.email)
// console.log(newObj["email"])

// console.log(newObj["full name"])
// console.log(newObj[mySym])
// console.log(typeof mySym)

newObj.email="sawk8787@gmail.com"
// Object.freeze(newObj)
// console.log(newObj)

newObj.greetings=function(){
    console.log("hello print")
}

// console.log(newObj.greetings)//function return back
// console.log(newObj.greetings())

newObj.greetingsTwo=function(){
    console.log(`hello ${this.name}`)
    console.log(`Hello , ${this["full name"]}`)
}
// console.log(newObj.greetingsTwo())


const tinderuser = new Object()  // singleton object 
 
tinderuser.id="1234"
tinderuser.name="sawan"
tinderuser.isLoggedin=true

// console.log(tinderuser)

const regularUser = {
    email:"sam@gmail.com",
    fullname:{
        userFullname:{
            firstname:"sawan",
            lastname:"kumar"
        }
    }
}

// console.log(regularUser.fullname.userFullname)

const testobj1={1:"a",2:"b"}
const testobj2={3:"c",4:"d"}

const testobj3 = {...testobj1,...testobj2}
// const testobj3={testobj1,testobj2}

// const testobj3 = Object.assign({},testobj1,testobj2)

// console.log(testobj3)

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty("isLoggedin"))

/*apis and destructuring*/

const course = {
    coursename:"js in hindi by hitesh sir",
    price:"999",
    courseinstructor:"Hitesh Choudhary"
}

// course["courseinstructor"]

const {courseinstructor: instructor} = course

// console.log(instructor)

const navbar=({company})=>{

}                    //destructuring
// navbar(company="sawan")

/* ************functions************ */

function add(num1,num2){
    return num1+num2
}
const res=add(3,5)
// console.log(res)

function loginUserMessage(username="Meen"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
    
}

// console.log(loginUserMessage("Sawan"))
// console.log(loginUserMessage())

function calculateCartNumber(...num1){
    return num1
}

// console.log(calculateCartNumber(200,3,223,44,332,0))

const user={
    username:"sawan",
    price:199
}

function handleObj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// console.log(handleObj(user))

const newArr = [200,300,400]

function returnSecondIndex(givenArr){
    return givenArr[1]
}

// console.log(returnSecondIndex(newArr))

/* scoping */
let a =30
if (true) {
    let a=10
    const b= 20

}
// console.log(a);
// console.log(b);
// console.log(c);

/* arrow function */

const newUser={
    username:"sawan",
    price:299,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)
    }
}
// newUser.welcomeMessage()

newUser.username="sam"

// newUser.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "sawan"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username = "sawan"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "saw"
//     console.log(this.username)
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2,333333))

const addTwo = (num1,num2) => (num1+mum2)

const retObj = () => ({username:"sawan"});

// console.log(retObj())

/* Immediately Invoked Function Expressions (IIFE) */

// (function chai(){  //named IIFE
//     console.log(`DB Connected`);
// })();

/*const n1 = new Object();
n1.id=123;
n1.name="newSawan";
n1.class="CSE"

((name)=>{      //Unnamed IIFE
    console.log(`dB Connected ${name}`)
})(`${n1.name}`);*/

// (()=>(console.log("hello")))(); //IIFE    

/* Control flow */

const isUserLoggedIn= true;
/*if (2==="2") {
    console.log(`executed`)
} else{
    console.log(`chomu`)
}

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`user power: ${power}`)
}*/

const balance = 1000
// if (balance > 500) console.log("test clear"),console.log("greater than 500"); 

if ( balance < 500 ) {
    console.log("leass than 500")
} else if ( balance < 750 ) {
    console.log("leass than 750")
} else if ( balance < 1200 ) {
    //console.log("less than 1200");
}

const month = 3

switch (month) {
    case 1:
        console.log(`january`)
        break;

    case 2:
        console.log(`feb`)
        break
    case 3:
        //console.log(`March`)
        break
    case 4:
        console.log(`april`)
        break
    default:
        console.log(`default run`)
        break;
}

/* Truthy and Falsy */

const userEmail = "s@wan.kk"

if(userEmail){
    console.log("user email found");
} else{
    console.log("not found");
}

//Falsy values

/* false, 0, -0, bigint 0n, "", null, undefined, NaN */

//Truthy values

/* not falsy values, "0", "false", " ", [], {}, function(){} */

const emptyobj = {}

if(Object.keys(emptyobj).length===0){
    console.log("obj is empty")
}

// console.log(false == 0)  --\
// console.log(false == '')    |---> all are true
// console.log('' == 0)   ----/

// && and operator || or operator 

// Nullish coalescing operator (??): null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

console.log(val1)



