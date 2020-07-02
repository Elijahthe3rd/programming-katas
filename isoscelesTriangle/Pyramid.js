let btnIso=document.getElementsByClassName('btnIso')
let x=document.getElementById('demoIso')

let iso=()=>{
        let i = 1;
        while (i <= size) {
            let    j = size;
            while (j > i) {
                console.log(" ");
                document.write("")
                j--;
            }

            let k = 1;
            while (k <= (i*2)-1) {
                console.log("#");
                document.writeln("#");
                x.innerHTML="#"

                k++;
            }
            document.writeln("<br>");
            i++;
        }

}

iso()

let pyramid=()=>{

       for (let i = 1; i <= size; i++){
           for (let j=size; j>i; j--) {
               document.writeln(" ");
           }

           for (let k = 1; k <= (i * 2) - 1; k++) {
            document.writeln("#");
           }
           
       }
}