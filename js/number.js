// document.getElementById('number-field').addEventListener('click',function(){
//     const textField = document.getElementById('text-field');
//     textField.style.fontSize = textField.value;
    
// })

document.getElementById('number-field').addEventListener('click', function() {
    const numberField = document.getElementById('number-field');
    const textField = document.getElementById('text-field');

    const fontSizeValue = parseFloat(numberField.value);
    
    if (!isNaN(fontSizeValue)) {
        textField.style.fontSize = fontSizeValue ;
    } else {
        
});
