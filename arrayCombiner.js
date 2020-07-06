let longest=["the","quick","brown", "fox", "ate", "my", "chickens"]
let longest1=["them","herm","down", "fox", "rate"]

function combine(args1,args2){
    let tempArr=[...args1]
    let secTempArr=[...args2]
    
    let final=tempArr.concat(secTempArr)
    let result=final.map(u=>{return u})
    return result
}

console.log(combine(longest,longest1))