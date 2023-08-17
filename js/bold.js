document.getElementById('btn-bold').addEventListener('click', function(){
    const textField = document.getElementById('text-field');
    // textField.style.fontWeight = 'bold';
    if(textField.style.fontWeight === 'bold'){
        textField.style.fontWeight = 'normal';
    }else{
        textField.style.fontWeight = 'bold';
    }
})