function checkuser()
{
    var userName=document.getElementById("username").value;
    var spn=document.getElementById("userErr");
    if(userName.length>5)
    {
        spn.innerHTML="your password is storng";
        spn.style.color="green";
    }
}