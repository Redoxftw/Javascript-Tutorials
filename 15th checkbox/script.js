document.getElementById("button").onclick=function(){

    const checkboxbtn=document.getElementById("mycheckbox");
    const visabtn=document.getElementById("visacard");
    const masterbtn=document.getElementById("mastercard");
    const paypalbtn=document.getElementById("paypal");

    if(mycheckbox.checked){
        document.getElementById("result").innerHTML="You are Subscribed!";
    }
    else{
        document.getElementById("result").innerHTML="You are Not Subscribed!";
    }

    if(visabtn.checked){
        document.getElementById("payment").innerHTML="You are using Visacard";
    }
    else if(masterbtn.checked){
        document.getElementById("payment").innerHTML="You are using Mastercard";
    }
    else if(paypalbtn.checked){
        document.getElementById("payment").innerHTML="You are using Paypal";
    }
    else {
        document.getElementById("payment").innerHTML="Choose a mode of payment!";
    }
}