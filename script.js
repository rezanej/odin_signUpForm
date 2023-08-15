let button=document.getElementById('dark-light');
button.addEventListener('click',()=>
{
    let className=document.documentElement.className;
    document.documentElement.className=className==='light'?'dark':'light';
}
)