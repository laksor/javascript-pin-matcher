// gettin random pin
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if(pinString.length == 4){
        return pin;
    }
    else{

        return getPin();
    }
}
// generate pin button
document.getElementById('pin-button').addEventListener('click', function (){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
})
// clearing the typed input
document.getElementById('key').addEventListener('click', function (event){
    const number = event.target.innerText;
    const typed = document.getElementById('number');
    const previousNumber = typed.value;
    if(isNaN(number)){
        if(number == 'C'){
            typed.value = '';
        }
    }
    else{
        const newOne = previousNumber + number;
        typed.value = newOne;
    }
    
})
// submit button pin verify and show alert 
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('number').value;
    const success = document.getElementById('success');
    const fail = document.getElementById('fail');
    if(pin == typedNumber){
        
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else{
        
        fail.style.display = 'block';
        success.style.display = 'none';
     }
}



