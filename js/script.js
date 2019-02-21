

var monto1= document.getElementById("d1");
var monto2= document.getElementById("d2");
var monto3= document.getElementById("d3");
var monto4= document.getElementById("d4");

var deuda1, deuda2, deuda3, deuda4;

var btn1 = document.getElementById("btn1");

function removeTransition (e){
    
    if (monto1.propertyName !== 'transform') return;
        
       monto1.style.transform= `scale(0.5)`;
    console.log("hola");
}

btn1.addEventListener("click",function(e){

    var temp = monto1.textContent;
    var numero = document.getElementById("barra1").value;
    
    
  deuda1 = parseInt(temp) + parseInt(numero);  
  monto1.textContent = deuda1;  
  monto1.style.transform= `scale(1.3)`;
    
    
return deuda1    
    
});

btn1.addEventListener('transitionend', removeTransition);

console.log(monto1);





