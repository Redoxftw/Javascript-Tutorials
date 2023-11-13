const PI=3.14;
document.getElementById("button").onclick=function(){
    let result=2*PI*(document.getElementById("radius").value);
    document.getElementById("circumference").innerHTML=result;
}