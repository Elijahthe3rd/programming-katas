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
    else if(typeof userName == "string")
    {
        x.innerText=`\nERROR: ${userName} \n\n Please Provide a String Value`
    }
    else 
    {
        setName(userName)
        x.innerText=getName()
    }
}

//set obj person name
let setName=(namestr)=>{
    if(typeof namestr =='string'){
        person.firstName = namestr
        setId()
    }
    else{
        console.log(new Error("Error occured"));
        document.getElementById('demoName').innerText=`\nERROR: Input field Empty`
        
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

