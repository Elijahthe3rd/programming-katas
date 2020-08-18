// let longest = ["the", "quick", "brown", "fox", "ate", "my", "chickens"]
// const longest=["them","herm","down", "fox", "rate"]

const longestArrayString = () => {
    let userInput=document.getElementById("arrays").value
   
    let output=document.getElementById("output")
    let longest
    let arrays = userInput.split(" ")
    

    let multiWords = []
    let ii = 0
    let longWord = arrays[ii]

    for (let index = 0; index < arrays.length; index++) {
        if (longWord.length <= arrays[index].length) {
            longWord = arrays[index]
        }
        if (longWord.length == arrays[index].length) {
            multiWords.push(arrays[index])
        }
    }
    
    let len = multiWords.length-1

    if(multiWords[ii].length == multiWords[len--].length)
    {
        console.log(multiWords[len--])
        output.innerHTML=multiWords
    }else{
        console.log(longWord);
        output.innerHTML=longWord
    }
    // for (let index2 = 0; index2 < multiWords.length; index2++) {
    //     if(multiWords[index2].length == multiWords[index2].length)
    //     {
    //         console.log(multiWords[index2], ' multiWords[index2]')
    //         output.innerHTML=multiWords[index2]
    //     }else{
    //      console.log(longWord);
    //      output.innerHTML=longWord
    //     }
    // }
}

module.exports=longestArrayString()