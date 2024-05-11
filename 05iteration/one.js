// for

// for(let index=0;index<10;index++){
//     const e = index;
//     // console.log(e)

// }

for(let i = 0;i<=10;i++){
    // console.log(`Outer loop value: ${i}`)
    for(let j = 0; j<=10 ;j++){
        // console.log(`inner loop ${j}`)
        // console.log(i ,"*", j, "=", i*j)
    }
}

let myArray = ["flash","batman","superman"]

for(let index=0;index<myArray.length;index++){
    console.log(myArray[index])
}

//break and continue

for(let index=1;index<=20;index++){
    if(index==5){
        console.log(`Detected 5`)
        continue;
    }
    console.log(`Value of index ${index}`)
}
