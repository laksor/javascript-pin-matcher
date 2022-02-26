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
// document.getElementById('submit').addEventListener('click', function (){
//     const g = document.getElementById('display-pin').value = getPin();
//     const s = document.getElementById('number').value = 
//     if(g == s){
//         const s = document.getElementById('s');
//         s.style.display = 'block';

//     }
//     else{
//         const fail = document.getElementById('f');
//         fail.style.display = 'block';
//     }
// })


