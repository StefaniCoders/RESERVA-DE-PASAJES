var celdas = document.getElementsByTagName('td');
var asientos = [];
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
function redirect(event){
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
}



function reservar () {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var s = "";
	var s += nombre + apellido + dni ;

	document.getElementById("mostrarLista").innerHTML = asientos;

	 
}
