function get()
{
    var user=document.getElementById("us").value;
    var dob=document.getElementById("dob").value;
    var first_name=user.slice(0,4);
    var date=new Date(dob);
    var last_name=date.getDate();
    var full_name=first_name+last_name;
    var store_pass=document.getElementById("divid").innerHTML=full_name;
}