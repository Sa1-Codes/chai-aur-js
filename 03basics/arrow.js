const user = {
    username  : "SAKSHAM",
    price:999,

    welcomeMessage : function (){
        // console.log(`${this.username},welcome to website`)
        // console.log(this)
    }
}
user.welcomeMessage()
user.username = "Saw"
user.welcomeMessage()
// console.log(this)   // refers to empty context in NODE environment

// function chai(){
//     let username ="Sawan"
//     console.log(this.username)

// }
// chai()

// const chai = () => {
//     let username ="Shaw"
//     console.log(this.username)
// }
// chai()



// const addtwo = (num1,num2) => {
//     return num1+num2
// }

// const addtwo = (num1,num2) => num1+num2 //implicit return

const addtwo = (num1,num2) => (num1+num2)

console.log(addtwo(1,2))



