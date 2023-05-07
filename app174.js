var inp1=document.getElementById("inp1");
var inp2=document.getElementById("inp2").value;
var span1=document.getElementById("spn1");
var span2=document.getElementById("spn2");
var b1=document.getElementById("btn1");
var b2=document.getElementById("btn2");

function restart()
{
    var inp1=document.getElementById("inp1").value=Math.floor((Math.random()*10));
    var inp2=document.getElementById("inp2").value=Math.floor((Math.random()*10));
}

function check()
{
    var inp1=document.getElementById("inp1").value;
    var inp2=document.getElementById("inp2").value;
}