const tinderUser = new Object()  //singleton object 

tinderUser.id="123abc"
tinderUser.name = "Saksham"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "user@gmail.com",
    fullname:{
        userfullname:{
            firstname: "saksham",
            lastname : "kumar"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname)  // ?-> protection for api response 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = Object.assign({},obj1,obj2)

// const obj3 = {...obj1,...obj2}

console.log(obj3)

const users=[
    {
        id:1,
        email:"1@gmail.com"
    },
    {
        id:2,
        email:"2@gmail.com"
    },
    {
        id:3,
        email:"3gmail.com"
    }
]

users[1].email

console.log(tinderUser)
console.log(Object.keys(tinderUser))  //important , gives an array of keys
console.log(Object.values(tinderUser))  // important  , gives an array of values
console.log(Object.entries(tinderUser)) // array of arrays{key,value}
// [ [ 'id', '123abc' ], [ 'name', 'Saksham' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"))  // check for the property of object return boolean 

