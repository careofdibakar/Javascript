let fctorial = (n)=>{
    let fac_value = 1
    while(n>0){
        fac_value = n*fac_value
        n--
    }
    return fac_value
}
console.log(fctorial(2));