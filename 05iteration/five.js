const lang = ["js","ruby","java","python","cpp"]

lang.forEach(function (item) {
    // console.log(item)
})

// lang.forEach((item)=>{
//     console.log(item)
// })

// function printme(item){
//     console.log(item)
// }

// lang.forEach(printme)


lang.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})


const myLang = [
    {
        name:"javascript",
        extension:"js"
    },
    {
        name:"c++",
        extension:"cpp"
    },
    {
        name:"python",
        extension:"py"
    }
]

myLang.forEach((item)=>{
    console.log(item.extension)
})