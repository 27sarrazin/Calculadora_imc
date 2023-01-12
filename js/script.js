var altura=document.getElementById("altura")
var peso=document.getElementById("peso")
var display=document.getElementById("display")


function calcular(){
   
    var h=parseFloat(altura.value)
    var p=parseFloat(peso.value)
    var imc= (p/(h*h))

    display.innerHTML=`imc =  ${imc.toFixed(2)}`

}