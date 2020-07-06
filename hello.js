let person={
    "id":0,
    "firstName":null,
    "lastName":null
}

function sayHello(){

    let userName=document.getElementById("name").value

    let x=document.getElementById("demoName")
    
    if(userName.length==0){
        console.log(new Error("empty input"));
        x.innerText=`\nERROR: Input field Empty` 
    }


    if(typeof userName !="string" || userName.length==0){
        x.innerHTML=`\n\nError:<br>Input failure!!!${userName} <br><br>${userName.length} input found`
    }else{
            setName(userName)
        x.innerText=getName()
    }
}

//set obj person name
let setName=(namestr)=>{
    let x=document.getElementById("demoName")

    if(typeof namestr =='string'){
        person.firstName = namestr
        setId()
    }else
    {
        x.innerText=`\nERROR: ${namestr} Please Provide a valid Value`
        throw new Error(`\nERROR: ${namestr} \n\n Please Provide a valid Value`)
    }
    
}
//method for auto incrementing the object id
let setId=()=>{     
    if(person.id <=person.id+1)
        person.id+=1
}

let getName=()=>{
    return (`\nhello: ${person.firstName}  \n`)  
}

