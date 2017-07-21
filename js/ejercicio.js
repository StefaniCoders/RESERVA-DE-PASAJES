var nombres = [];
var apellidos = [];
var dni = [];
var estado = [];
var asiento = -1;
//var celdas = document.getElementsByTagName('td');
var asientos = [];

function ini(){
	for(int i = 0; i < 32; ++i){
		nombres.push(" ");
		apellidos.push(" ");
		dni.push(" ");
	}
}

function mostrarOcultar(a){
	if(a == true)
	document.getElementById("resultado").style.display = "block";
	else if(a == false)
	document.getElementById("resultado").style.display = "none";
	//document.write("gooo");
}

function cambiarAsiento(a){
	asiento = a;
}

function reservar(){
	//nombres[asiento] = document.getElementById("nombre").text;
	alert(document.getElementById("nombre").text);
}

/*for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}*/

/*

function mostrar(){
	document.write("<td>Nombres:</td>");
    //document.getElementById("mostrar").innerHTML=(event.target.textContent);
}



function reservar () {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var s = "";
	var s += nombre + apellido + dni ;

	document.getElementById("mostrarLista").innerHTML = asientos;

	 
}
*/
