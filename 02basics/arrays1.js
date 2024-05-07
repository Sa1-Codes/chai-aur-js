const myArr = [0,1,2,3,4,5]

// console.log(myArr[0]);

const myHeroes = new Array("naagraj","shaktimann")

console.log(`Original arr `,myArr);

// myArr.push(6)
// myArr.push(7)

// console.log(myArr)

// myArr.pop()

// console.log(myArr)

myArr.unshift(9)
// console.log(myArr)
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

const newArr = myArr.join()  // binds the array in to strings

// console.log(typeof newArr)

//slice and splice

const n1 = myArr.slice(1,3) // 4 is exclusive
console.log(n1)
console.log(myArr)


const n2 = myArr.splice(1,3)  // 4 is inclusive
console.log('org',myArr)
console.log(n2)




