let age=window.prompt("Enter age");
age=Number(age);
if(age>=18 && age<65)
{
    document.getElementById("age").innerHTML="You are an adult!";
}

else if(age>=65)
{
    document.getElementById("age").innerHTML="You are a senior citizen!";
}
else
{
    document.getElementById("age").innerHTML="You are a child!";
}
