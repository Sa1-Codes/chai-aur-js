//for of

const arr = [1,2,3,4,5]

for (const index of arr) {
    console.log(index)
}

const greeting = "Hello ji"

// for(const greet of greeting){
//     console.log(`Each char is ${greet}`)
// }

//Maps

const map = new Map()

map.set("IN","India")
map.set("USA","united states of america")
map.set("FR","France")

// console.log(map)


for(const key of map){
    console.log(key)    // return key value array
}


for(const [key,value] of map){
    console.log(key,"-:",value)
}

