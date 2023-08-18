document.getElementById('btn-italic').addEventListener('click',function(){
    const textField = document.getElementById('text-field');
    // textField.style.fontStyle = 'italic'; 

    if(textField.style.fontStyle !== 'italic'){
        textField.style.fontStyle = 'italic';
    }else{
        textField.style.fontStyle = 'normal';
    }
})