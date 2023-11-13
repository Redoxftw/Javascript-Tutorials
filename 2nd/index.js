let username;
document.getElementById("mybutton").onclick=function(){
    username=document.getElementById("myname").value;
    console.log(username);
    document.getElementById("label").innerHTML=username;
}
    