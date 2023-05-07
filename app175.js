function create()
{
    var input=document.getElementById("pass").value;
    var spn1=document.getElementById("sp1");
    var ptn=/^[a-z,A-Z,0-9@#$]{8,12}$/;
    if(ptn.test(input))
    {
        alert("password created");
        spn1.innerHTML="valid Password is:"+'<br>'+input;
    } 
    else
    {
        alert("Requirements is not satisfied");
        spn1.innerHTML="Invalid Password is:"+'<br>'+input;
    }
}