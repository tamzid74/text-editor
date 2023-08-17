document.getElementById('btn-underline').addEventListener('click',function(){
    const textField = document.getElementById('text-field');
    if(textField.style.textDecoration !== 'underline'){
        textField.style.textDecoration = 'underline';
    }
    else{
        textField.style.textDecoration = 'none';
    }

})


