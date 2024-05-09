// singleton 

// literals -> not singleton 
// constructor-> singleton   object.create 

// object literal

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")

const jsUser = {
    name : "sawan",
    age : 20,
    "full name":"sawan k",
    [mySym1] : "key1",    //symbol as a key "important wrt interviews"
    location : "Delhi",
    email : "abc@gamil.com",
    isLoggedIn : false,
    lastLogginDays : [ "monday","tuesday"]

}

console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(typeof jsUser[mySym1])

jsUser.email = "abc@yahoo.in"
// Object.freeze(jsUser)  // freezes the changes in object
jsUser.email = "abc@mic.us"

console.log(jsUser["email"])
// console.log(jsUser)

jsUser.greeting = function(){
    console.log(`hello ${this.name}`)
}

console.log(jsUser.greeting())



