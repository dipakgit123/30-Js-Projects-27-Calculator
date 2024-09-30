var text =  document.getElementById("td1").textContent; 
var text1=document.getElementById("td2").textContent
var text2 =document.getElementById("td3").textContent
var text3 =document.getElementById("td4").textContent
var text4 =document.getElementById("td5").textContent
var text5 =document.getElementById("td6").textContent
var text6 =document.getElementById("td7").textContent
var text7 =document.getElementById("td8").textContent
var text8 =document.getElementById("td9").textContent
var text9 =document.getElementById("td10").textContent
var text10 =document.getElementById("td11").textContent
var add=document.getElementById("add").textContent
var sub =document.getElementById("sub").textContent
var mul =document.getElementById("mul").textContent
var div =document.getElementById("div").textContent


function GetValue(){
document.getElementById("values").innerHTML += text; 
}

function GetValue1(){
    document.getElementById("values").innerHTML += text1; 
}
function GetValue2(){
    document.getElementById("values").innerHTML += text2; 
}

function GetValue3(){
    document.getElementById("values").innerHTML += text3; 
}

function GetValue4(){
    document.getElementById("values").innerHTML += text4; 
}

function GetValue5(){
    document.getElementById("values").innerHTML += text5; 
}

function GetValue6(){
    document.getElementById("values").innerHTML += text6; 
}

function GetValue7(){
    document.getElementById("values").innerHTML += text7; 
}
function GetValue8(){
    document.getElementById("values").innerHTML += text8; 
}
function GetValue9(){
    document.getElementById("values").innerHTML += text9; 
}
function GetValue10(){
    document.getElementById("values").innerHTML += text10; 
}

function Addition(){
    document.getElementById("values").innerHTML += add; 
}

function Substraction(){
    document.getElementById("values").innerHTML += sub;
}
function Multiplication(){
    document.getElementById("values").innerHTML += mul;
}

 function Division(){
    document.getElementById("values").innerHTML += div;
 }

function Calc(){
    try {
        const values = document.getElementById("values"); //get the value
        const result = eval(values.textContent); // evaluate the values
        values.textContent = result;  // update with calculating value
    } catch{
        document.getElementById("values").textContent = 'Error';
    }
}

function Clear(){
    const values = document.getElementById("values"); 
    values.textContent=''
}

function Del(){
    const values = document.getElementById("values"); 
    let text = values.textContent; // store in a variable
    text = text.slice(0, -1); // remove last string
    values.textContent = text; // update the val
}