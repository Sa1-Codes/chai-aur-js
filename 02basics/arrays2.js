const marvel_heroes = ["thor", "ironman", "spiderman"]

const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)

// const newHero = marvel_heroes.concat(dc_heroes)

// console.log(newHero)

// const allHeroes = [...marvel_heroes , ...dc_heroes]  //spread operator ...

// console.log(allHeroes)

const numArr = [1,2,3,[4,5,6],[4,5,[6,7,8]]]
const newnumarr = numArr.flat(3)

// console.log(newnumarr)


console.log(Array.isArray(numArr))

console.log(Array.from("Sawan"))

console.log(Array.from({name:"ask.D.Question"})) // interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))