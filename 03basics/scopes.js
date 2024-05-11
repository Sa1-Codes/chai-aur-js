let a = 200

if(true){
    let a=10
    const b = 20
    

}

// console.log(a); 
// console.log(b);
// console.log(c);

// scope is different in window and different in code environment 

function one(){
    const username = "Saksham"

    function two(){
        const website = "Yt"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()

if (true){
    const username ="sawan"
    if(username == "sawan"){
        const website  = "yt"
        // console.log(username+website)
    }
    // console.log(website)
}

// console.log(username)

/*    interesting */

addone(5)
function addone(num){
    return num+1
}


// addtwo(3)  the way function is defined
const addtwo = function(num){
    return num +2
}

