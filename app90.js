var result=document.getElementById("divid");

function demo()
{
    var a=document.getElementById("val1").value;
    var b=document.getElementById("val2").value;
     a=parseInt(a);
     b=parseInt(b);
    var c=a+b;
    result.innerHTML="Total Value:"+c;
    result.style.color="blue";
}