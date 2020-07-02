

function oddEven(){
    let numberInput=document.getElementById('E_or_O').value
    let x=document.getElementById('demoEO')
    

    if(typeof parseInt(numberInput) != "number"){
        // document.write(`!!! ${numberInput} is invalid, Please enter valid input !!!`)
        x.innerText=(`!!! ${numberInput} is invalid, Please enter valid input !!!`)
        
    }
    else if(parseInt(numberInput) <= 0){
        // document.write(`${numberInput} must be greater than Zero`)
        x.innerText = (`${numberInput} must be greater than Zero`)
    

    }
    else if((parseInt(numberInput) % 2) == 0){
        // document.write(`${numberInput} Is an EVEN Number`)
        x.innerText=`${numberInput} Is an EVEN Number`
    }
    else
    {
        // document.write(`${numberInput} Is an ODD Number`)
        x.innerText=(`${numberInput} Is an ODD Number`)
        
    }
    
}

