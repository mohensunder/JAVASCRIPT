var span1=document.getElementById("usererrmsg");
var span2=document.getElementById("pswerrmsg");
var user_input=document.getElementById("user");
user_input.style.border.color="green";
user_input.style.padding="20px";

function user_login()
{
    var user_value=user_name.value;
    var password=document.getElementById("psw").value;

    if(user_value.length<=5 || user_value.length>15)
    {
        span1.innerHTML="username must be 8 characters";
        span1.style.color="red";
    }
    else{
        span2.innerHTML="username must be 8 characters";
        span2.style.color="red";
    }
}
