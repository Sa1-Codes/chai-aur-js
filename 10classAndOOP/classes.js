//ES6

class User{
    constructor(username,email,password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptPasswod(){
        return `${this.password}abc`
    }

    changeUsername (){
        return `${this.username.toUpperCase()}`
    }


}

const chai = new User("chai","chai@aa","123")

console.log(chai.encryptPasswod())

console.log(chai.changeUsername())

function user(username,email,password) { 
    this.username = username,
    this.email = email,
    this.password = password
}

user.prototype.encryptPasswod = function (){
    return `${this.password}abc`
}

user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const chai2 = new user("sawwan","sawa#123","1234")

console.log(chai2.changeUserName())