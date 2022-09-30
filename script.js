


let textoNormal = document.getElementById("textarea"); //etiqueta donde esta el mensaje a encriptar
let encriptado = document.getElementById("texto_encriptado"); //etiqueta donde aparece el mensaje encriptado y desencriptado
let botonEnc = document.getElementById("btn_encriptar"); //botonEnc y botonDes hacen referencia a los botones de encriptado y desencriptado respectivamente//
let botonDes = document.getElementById("btn_desencriptar");
let copiar = document.getElementById("btn_copiar") ;//boton que copia el mensaje encriptado
let imagen = document.getElementById("img_desencriptado"); //imagen que va a desaparecer cuando aparezca el mensaje encriptado

	

function copiado() {
	let textoCopia = encriptado.innerHTML;
	textoNormal.value = textoCopia;
}

function encriptar() {

	encriptado.style.display = "inline-block"

	let arrayTexto = Array.from(textoNormal.value);

	for (var i = 0; i < arrayTexto.length; i++) {

		if (arrayTexto[i] == "a") {
			arrayTexto.splice(i, 1, "ai");
		}
		else if (arrayTexto[i] == "e") {
			arrayTexto.splice(i, 1, "enter");
		}
		else if (arrayTexto[i] == "i") {
			arrayTexto.splice(i, 1, "imes");
		}
		else if (arrayTexto[i] == "o") {
			arrayTexto.splice(i, 1, "over");
		}
		else if (arrayTexto[i] == "u") {
			arrayTexto.splice(i, 1, "ufat");
		}				
	}
	
	let string = arrayTexto.toString();
	string01 = string.replace(/(,)/gm,"");
	encriptado.innerHTML = string01;
	return encriptado.value;


	
}

function desencriptar() {

	encriptado.style.display = "inline-block"

	let arrayTexto1 = Array.from(textoNormal.value);

	for (var i = 0; i < arrayTexto1.length; i++) {

		if (arrayTexto1[i] == "a") {
			arrayTexto1.splice(i, 2, "a");
		}
		else if (arrayTexto1[i] == "e") {
			arrayTexto1.splice(i, 5, "e");
		}
		else if (arrayTexto1[i] == "i") {
			arrayTexto1.splice(i, 4, "i");
		}
		else if (arrayTexto1[i] == "o") {
			arrayTexto1.splice(i, 4, "o");
		}
		else if (arrayTexto1[i] == "u") {
			arrayTexto1.splice(i, 4, "u");
		}				
	}
	
	let stringDes = arrayTexto1.toString();
	string02 = stringDes.replace(/(,)/gm,"");
	encriptado.innerHTML = string02;
	return encriptado.value;
	
}

botonEnc.onclick = encriptar;
botonDes.onclick = desencriptar;
copiar.onclick = copiado;