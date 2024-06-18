class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`)
    }

    static createID(){
        return `123`
    }
}

const sawan = new User("Sawan")

// console.log(sawan.createID())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const mi = new Teacher("Mi","mi@g.com")

mi.logMe()