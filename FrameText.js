const arr = [
{
    id:1,
    "text":"Writeee"
},{
    id:2,
    "text":"Good"
},{
    id:3,
    "text":"Code"
},{
    id:4,
    "text":"Every"
},{
    id:5,
    "text":"Daysdaysdays"}
]

let longerText = null
let firstText = arr[0].text
let longTextLength=null;

let FindLongerText = array=>array.map( (text2) =>{ 
    array[0].text.length < text2.length
    longerText=text2.text
    longTextLength=longerText.length
});


function printStars(){
    let char="*"
    let newArra=arr.filter(n=>n.text)
    let asterisk
    let lengthFinder=newArra.filter(n=>{
        if(n.text.length > firstText.length){ 
            longTextLength= n.text.length
        }
        else{
            longTextLength=firstText.length
        }
    })

    for (let count=0,value = 1; value < longTextLength+2; value++) {
        if(value-1==0){
            while(char.length <= longTextLength+3){
                char+="*"
            }
        }
        if(value-1 == count ){console.log(char)} 

        if(value >=1 && count===0 && count<=longTextLength-value){
            while(newArra.length>count){
                asterisk="*" +" "+ newArra[count].text+" "+"*"
                console.log(asterisk)
                count++
            }
        }
        }

}

printStars()
    
