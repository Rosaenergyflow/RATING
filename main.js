//VARIABLES
var corazones = document.getElementsByClassName('corazon');
var contenedor = document.getElementById('divCorazones');
console.log(corazones);
//FUNCIONES:
function colorear(posicion){
	actualizar();
    for(let i=posicion; i<corazones.length; i++){
        corazones[i].classList.add('coloreado');
        console.log(corazones[i]);
    }
}
function actualizar(){
    for(let x=0; x<corazones.length; x++){
            corazones[x].classList.remove('coloreado');
        }
}

//addEventListeners
contenedor.addEventListener("click", function (event) {
	var id_corazon = event.target.id;
    var posicion = id_corazon.replace('corazon', '');
	colorear(posicion);
	console.log('Has hecho click en el corazon de la posicion: '+  (5-posicion) +' (Los corazones estan invertidos la posicion real del array es '+posicion+')');
}, false);	

window.addEventListener("click", function(e) { 
    if(!document.getElementById("divCorazones").contains(e.target)) { 
        actualizar();
    }
})