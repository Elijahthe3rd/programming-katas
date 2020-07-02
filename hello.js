let person={
    "id":0,
    "firstName":null,
    "lastName":null
}

function sayHello(){

    let userName=document.getElementById("name").value

    let x=document.getElementById("demoName")

    setName(userName)
    
    console.log(`\nhello:\n\n| ID\t| Name\t\n| ${person.id}\t\t| ${person.firstName}  \n`)
    // document.write(`\nhello:${getName()}\n`)
    x.innerText=getName()

}

//set obj person name
let setName=(namestr)=>{
    person.firstName = namestr
    setId()
}
//method for auto incrementing the object id
let setId=()=>{     
    if(person.id <=person.id+1)
        person.id+=1
}

let getName=()=>{
    return (`\nhello:\n\n| ID\t\t| Name\t\n| ${person.id}\t\t | ${person.firstName}  \n`)
}

