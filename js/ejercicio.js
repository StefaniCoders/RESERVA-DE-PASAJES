var nombres = [];
var apellidos = [];
var dni = [];
var asiento = -1;
//var celdas = document.getElementsByTagName('td');
var asientos = [];
ini();
function ini(){
	for(var i = 0; i < 32; ++i){
		nombres.push(" ");
		apellidos.push(" ");
		dni.push("0");
	}
}

function buscar(){
	asiento = -1;
	mostrarOcultar(true);
	var getDni = document.getElementsByName("dniS")[0].value;
	getDni= parseInt(getDni);
	for(var i = 0; i < 32; ++i){
		if(parseInt(dni[i]) == getDni){
			//alert(parseInt(dni[i]));
			asiento = i;
			document.getElementById("nombreSearch").value = nombres[asiento];
			document.getElementById("apellidoSearch").value = apellidos[asiento];
			document.getElementById("dniSearch").value = dni[asiento];
			return;
		}
	}
	document.getElementById("nombreSearch").value = " ";
	document.getElementById("apellidoSearch").value = " ";
	document.getElementById("dniSearch").value = " ";
	
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
	//document.write("CORRIENDO!");
	nombres[asiento] = document.getElementsByName("nombre")[0].value;
	apellidos[asiento] = document.getElementsByName("apellido")[0].value;
	dni[asiento] = document.getElementsByName("dni")[0].value;
}

function mostrar(){
	document.getElementsByName("nombre")[0].value = nombres[asiento];
	document.getElementsByName("apellido")[0].value = apellidos[asiento];
	document.getElementsByName("dni")[0].value = dni[asiento];
}

function eliminar(){
	nombres[asiento] = " ";
	apellidos[asiento] = " ";
	dni[asiento] = " ";
	mostrar();
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
