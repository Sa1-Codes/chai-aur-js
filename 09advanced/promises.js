const promise1 = new Promise(function(resolve, reject){
    //do and async task 
    // DB calls ,Cryptography, networks
    setTimeout(function(){
        console.log(`async task is complete`)
        resolve()
    },1000)
})

promise1.then(function(){
    console.log(`promise consume`)
})


new Promise(function(resolve,reject){
    setTimeout(function () {
        console.log(`Async Task 2`)
        resolve()
    })
}).then(function(){
    console.log(`Async task 2 resolved`)
})


const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"Chai@email.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user)
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Sawan",password:"1234"})
        }
        else{
            reject(`ERROR: something went wrong`)
        }
    },1000)
})

promise4
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolved or rejected")
})


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript",password:"1234"})
        }
        else{
            reject(`ERROR: Js went wrong`)
        }
    },1000)
})

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromise5()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/Sa1-Codes')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(`E:${error}`)
//     }

// }

fetch('https://api.github.com/users/Sa1-Codes')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))

