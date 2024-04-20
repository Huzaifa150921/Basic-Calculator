let string=""
let buttons=document.querySelectorAll(".button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{

        try{
        if(event.target.innerHTML == '='){
            string=eval(string)
            document.querySelector('input').value=string
        }
        
        else if(event.target.innerHTML=='C'){
            string=""
            document.querySelector('input').value=string
            
        }
    
        else{
            if (event.target.innerHTML == 'X') {
                string += '*';
            } else {
                string += event.target.innerHTML;
            }
            document.querySelector('input').value = string;
        }
    }catch{
        document.querySelector("input").value="Syntax Error"
    }
    })
})