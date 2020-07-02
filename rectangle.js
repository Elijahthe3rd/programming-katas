function rectangle(){
    let len=5
    //outer loop focusing on rows
    let strElement="* "
    let x=document.getElementById("demorect")
    for (let i= 0; i < len-2;i ++) {
    
    //inner loop focusing on columns

    for (let j= 0; j <= len;j ++) {
        console.log(strElement)
        document.write(strElement)

    }
    document.write("<br>")

    
}
}

// Module.exports={rectangle}
