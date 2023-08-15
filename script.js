let button=document.getElementById('dark-light');
button.addEventListener('click',()=>
{
    let className=document.documentElement.className;
    if(className==='light no-touch')
        document.documentElement.className='dark';
    else
        document.documentElement.className=(className==='light')?
        'dark':'light';
}
)
let password=document.getElementById('password');
let cpassword=document.getElementById('Cpassword');

cpassword.addEventListener('input',()=>
{

    if(password.value!==cpassword.value)
    {
        cpassword.setCustomValidity('f');
    }
    else
    cpassword.setCustomValidity('');
}
)