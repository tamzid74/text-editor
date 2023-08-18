// document.getElementById('number-field').addEventListener('click',function(){
//     const numberField = document.getElementById('number-field');
//     const textField = document.getElementById('text-field');
//     const numberFieldValue = numberField.value;
//     textField.style.fontSize = numberFieldValue + 'px';
    
    
// })
// document.getElementById('number-field').addEventListener('keyup',function(){
//     const numberField = document.getElementById('number-field');
//     const textField = document.getElementById('text-field');
//     const numberFieldValue = numberField.value;
//     textField.style.fontSize = numberFieldValue + 'px';
    
// })

const numberField = document.getElementById('number-field');
const textField = document.getElementById('text-field');
const upperLower = document.getElementById('upper-lower');
const inputField = document.getElementById('input-field');

numberField.value = 16;


numberField.addEventListener('click',function(){
    textField.style.fontSize = numberField.value + 'px';
})
numberField.addEventListener('keyup',function(){
    textField.style.fontSize = numberField.value + 'px';
})

upperLower.addEventListener('click',function(){
    if(textField.style.textTransform !== 'uppercase'){
        textField.style.textTransform = 'uppercase'
    }else{
        textField.style.textTransform = 'lowercase';
    }
})

inputField.addEventListener('input',function(){
    textField.style.color = inputField.value; 
})