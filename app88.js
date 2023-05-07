
var span=document.getElementById("spid");
function sample()
{
    var us=document.getElementById("user");
    us=us.value;
    if(us.length<=3 || us.length>10)
    {
    span.innerHTML="username must br 8 characters";
    span.style.color="red";
    }
    else
    {
        span.innerHTML="";
    }
}