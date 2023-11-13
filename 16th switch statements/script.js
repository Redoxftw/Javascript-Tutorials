document.getElementById("button").onclick=function(){
    let grade=document.getElementById("grade").value;

    switch (grade) {
        case "A":
            document.getElementById("remark").innerHTML="You did great!";
            break;
        case "B":
            document.getElementById("remark").innerHTML="You did good!";
            break;
        case "C":
            document.getElementById("remark").innerHTML="You did okay.";
            break;
        case "D":
            document.getElementById("remark").innerHTML="You barely passed...";
            break;
        case "F":
            document.getElementById("remark").innerHTML="You Failed!";
            break;
        default:
            document.getElementById("remark").innerHTML=grade +" is not a letter grade!";
            break;
    }
}