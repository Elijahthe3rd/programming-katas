function square(){
    let len=5
    //outer loop focusing on rows
    let strElement="* "
    let x=document.getElementById("sqr")
    for (let i= 0; i<len;i ++) {
    
    //inner loop focusing on columns

    for (let i= 0; i < len;i ++) {
        console.log("pattern was build successfully")
        document.write(strElement)
        x.innerHTML=strElement

    }
    document.write("<br>")

    
}
}

// Module.exports=square()