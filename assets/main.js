function calcularIMC(){
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;
	
	if(peso == "" || altura == ""){
		alert("Llena los campos vacios");
	}else{
		alert("Tu IMC es de: " + (parseInt(peso/Math.pow(altura,2))));
	}

}