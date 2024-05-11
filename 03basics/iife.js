//immediately invoked function expressions


(function chai(){
    console.log("DB coonected")
})();   // ; -> stop the context // important



( (name) => {
    console.log(`Db connected ${name}`)
})("Sawan");



