const name = "sawan"

let repocount = 1

//  typeof string is object 

// console.log(`My name is ${name} and my repocount is ${repocount}`)

const gamename = new String("contra")

console.log(`game name ${gamename}`)

// console.log(gamename[1])

// console.log(gamename.__proto__)

// console.log(gamename.toUpperCase());

// console.log(gamename.charAt(2))

// console.log(gamename.indexOf("t"))

const newString = gamename.substring(0,3)
console.log(newString)

const anotherString = gamename.slice(-3,2);
console.log(anotherString)

const newName = "   sawan   "

console.log(newName)
console.log(newName.trim())

const url = "https://www.sawan.com/sawam%20nawas"

console.log(url.replace('%20', '-'))
