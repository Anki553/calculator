let calValue=""
let button=document.querySelectorAll('.button');
Array.from(button).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            calValue=eval(calValue)
            document.querySelector('input').value=calValue;
        }else if(e.target.innerHTML=='C'){
            calValue=""
            document.querySelector('input').value=calValue;
        }else{
            console.log(e.target)
            calValue=calValue+e.target.innerHTML
            document.querySelector('input').value=calValue
        }

    })
})