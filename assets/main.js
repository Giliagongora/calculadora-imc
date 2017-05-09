
function calcularIMC(){
	
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;

	if(peso == "" ){
		alert("Llena los campos vacios");
else if(altura == ""){
	alert("Llena los campos vacios");
}
}else{
		alert("Tu IMC es de: " + (parseInt(peso/Math.pow(altura,2))));
	}

}


