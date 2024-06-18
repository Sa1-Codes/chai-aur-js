// let myName = "SAWAN    "

// console.log(myName.trueLength)

let myHeroes = ["thor","spiderman"]

let  heroPower = {
    thor:"Hammer",
    spiderman: "sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all Object`)
}
Array.prototype.heySawan = function(){
    console.log(`hey Sawan`)
}

// myHeroes.hitesh()
// myHeroes.heySawan()
// heroPower.heySawan()
// heroPower.hitesh()


//inheritence 

const User = {
    name:"chai",
    email:"chai@email.com"
}

const Teacher = {
    makeVideo : false
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "JS assognment",
    fullTime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUser = "Sawan    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUser.trueLength()
"SASWA   ".trueLength()
