function triangle(){
    let size=5
    let str = " * "
    let element=document.getElementById("demo")

    for (let index = 0; index <=size-1; index++) {

        document.write(str)
        console.log(str)

        element.innerText=str
        document.write("<br>")
        str+=" * "
    }

}

// Module.exports= triangle()


