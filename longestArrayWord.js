let longestArrayString=()=>{
// let longest=["the","quick","brown", "fox", "ate", "my", "chickens"]
let longest=["them","herm","down", "fox", "rate"]

let wordLength=0;
let longWord=longest[0]
let multiWords=[]
let ii=0
for (let index = 1; index < longest.length; index++) {
    
    if(longWord.length < longest[index].length ) longWord=longest[index]
    
    else if( longest[ii] == longest[ii+1].length)  multiWords.push(longest[index])


}

console.log(longWord)
console.log(multiWords.values().next())
}
longestArrayString()