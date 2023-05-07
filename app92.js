var d=document.getElementById("divid");

function log()
{
    var us=document.getElementById("user").value;
    var psw=document.getElementById("psw").value;
    if(us=="kgisl" && psw=="kgisl@2023")
    {
        d.innerHTML="your login is success";
        d.style.color="green";
    }
    else
    {
        d.innerHTML="invalid user";
        d.style.color="red";
    }
}