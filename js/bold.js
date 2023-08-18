document.getElementById('btn-bold').addEventListener('click', function(){
    const textField = document.getElementById('text-field');
    if(textField.style.fontWeight === 'bold'){
        textField.style.fontWeight = 'normal';
    }else{
        textField.style.fontWeight = 'bold';
    }
})