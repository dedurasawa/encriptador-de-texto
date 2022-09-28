


let textoNormal = document.getElementById("textarea");
let encriptado = document.getElementById("texto_encriptado")
let botonEnc = document.getElementById("btn_encriptar"); //botonEnc y botonDes hacen referencia a los botones de encriptado y desencriptado respectivamente//
let botonDes = document.getElementById("btn_desencriptar");
let copiar = document.getElementById("btn_copiar") //boton que copia el mensaje encriptado
let imagen = document.getElementById("img_desencriptado"); //imagen que va a desaparecer cuando aparezca el mensaje encriptado




function encriptar() {
	
	let arrayTexto = Array.from(textoNormal.value)

	for (var i = 0; i < arrayTexto.length; i++) {

		if (arrayTexto[i] == "a") {
			arrayTexto.splice(i, 1, "ai");
		}
		else if (arrayTexto[i] == "e") {
			arrayTexto.splice(i, 1, "enter")
		}
		else if (arrayTexto[i] == "i") {
			arrayTexto.splice(i, 1, "imes")
		}
		else if (arrayTexto[i] == "o") {
			arrayTexto.splice(i, 1, "over")
		}
		else if (arrayTexto[i] == "u") {
			arrayTexto.splice(i, 1, "ufat")
		}				
	}
	
	

	 let string = arrayTexto.toString();
	 string01 = string.replace(/(,)/gm,"");
	console.log(string01)
	encriptado.innerHTML = string01
	return encriptado.value;
	
}

function desencriptar() {

	let arrayTexto1 = Array.from(textoNormal.value)

	for (var i = 0; i < arrayTexto1.length; i++) {

		if (arrayTexto1[i] == "a") {
			arrayTexto1.splice(i, 2, "a");
		}
		else if (arrayTexto1[i] == "e") {
			arrayTexto1.splice(i, 5, "e")
		}
		else if (arrayTexto1[i] == "i") {
			arrayTexto1.splice(i, 4, "i")
		}
		else if (arrayTexto1[i] == "o") {
			arrayTexto1.splice(i, 4, "o")
		}
		else if (arrayTexto1[i] == "u") {
			arrayTexto1.splice(i, 4, "u")
		}				
	}

	console.log(arrayTexto1)
	

	 let string01 = arrayTexto1.toString();
	 string02 = string01.replace(/(,)/gm,"");
	console.log(string02)
	encriptado.innerHTML = string02
	return encriptado.value;
	
}

function copiado() {
	textoNormal.innerHTML = encriptado;
	return textoNormal;

}

botonEnc.onclick = encriptar;
botonDes.onclick = desencriptar;
copiar.onclick = copiar