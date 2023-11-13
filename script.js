let username="";
while(username=="" || username==null){ 
    username=window.prompt("Enter Username");
}
document.getElementById("username").innerHTML="Hello "+username+"!";