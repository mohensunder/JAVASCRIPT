var result=document.getElementById("divid");

function demo()
{
    var a=document.getElementById("val1").value;
    var b=document.getElementById("val2").value;
     a=parseInt(a);
     b=parseInt(b);
    if(a>b)
    {
        result.innerHTML=a+"A is Greaterthen B";
    }
    else
    {
        result.innerHTML=b+"B is Greaterthen A";
    } 
}