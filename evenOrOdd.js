

function oddEven(){
    let numberInput=document.getElementById('E_or_O').value
    let x=document.getElementById('demoEO')
    

    // if(typeof parseInt(numberInput) != "number"){
    //     // document.write(`!!! ${numberInput} is invalid, Please enter valid input !!!`)
    //     x.innerText=(`!!! ${numberInput} is invalid, Please enter valid input !!!`)
        
    // }
    // if(parseInt(numberInput) <= 0){
    //     // document.write(`${numberInput} must be greater than Zero`)
    //     x.innerText = (`${numberInput} must be greater than Zero`)
    

    // }
    if(numberInput.length==0){
        console.log(new Error("empty input"));
        x.innerText=`\nERROR: Input field Empty`
        
    }else{
    if(typeof numberInput==!"string"){
        x.innerText=`\nERROR-Provided: ${numberInput} Not a Number\n\n Please Provide a Number`
    }else{
        if((parseInt(numberInput) % 2) == 0){
        // document.write(`${numberInput} Is an EVEN Number`)
        x.innerText=`${numberInput} Is an EVEN Number`
        }
        else
        {
            // document.write(`${numberInput} Is an ODD Number`)
            x.innerText=(`${numberInput} Is an ODD Number`)
            console.log(typeof numberInput)
            console.log(numberInput.length)
        }
    
    }
}
}
