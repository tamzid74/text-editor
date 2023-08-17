document.getElementById('btn-bold').addEventListener('click', function(){
    const textFieldValue = document.getElementById('text-field');
    const textField = textFieldValue.value;
    textField.style.fontWeight = 'bold'
})