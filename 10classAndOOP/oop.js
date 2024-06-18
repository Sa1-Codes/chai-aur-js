const user = {
    username : 'sawan',
    loginCount: 8,
    signedIn : true,
    getUserDetail: function(){
        console.log("Got user details from Db")
        console.log(`username : ${this.username}`)
        console.log(this)
    }
}

// console.log(user["username"])
// console.log(user.getUserDetail())

function User(username,loginCount,isloggedin){
    this.username = username
    this.loginCount = loginCount
    this.isloggedin = isloggedin
    this.greeting = function(){
        console.log(`Welcome , ${this.username}`)
    }

    return this
}

const userOne = new User("sawan",12,true)

console.log(userOne.constructor)

const userTwo = new User("chaiAurcode",14,false)

// console.log(userTwo)



// const promiseOne = new Promise()

// const date = new Date()