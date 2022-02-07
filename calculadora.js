var res = document.getElementById('resultado')
var confirmar = document.getElementById('igual')

function insert(valor){
   res.innerHTML +=valor
}

function clean(){
   res.innerHTML= ''
}

function backspace(){
   if(res.textContent){
      var result = document.getElementById('resultado').innerHTML
      res.innerHTML = result.substring(0, result.length -1);
   }
}

function confirma(){
  res.innerHTML =eval(res.innerHTML)
   
      
   
}
