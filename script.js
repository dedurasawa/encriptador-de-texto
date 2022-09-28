


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

	let arrayTexto = Array.from(textoNormal.value)

	for (var i = 0; i < arrayTexto.length; i++) {

		if (arrayTexto[i] == "a,i") {
			arrayTexto.splice(i, 2, "a");
		}
		else if (arrayTexto[i] == "e,n,t,e,r") {
			arrayTexto.splice(i, 5, "e")
		}
		else if (arrayTexto[i] == "i,m,e,s") {
			arrayTexto.splice(i, 3, "i")
		}
		else if (arrayTexto[i] == "o,v,e,r") {
			arrayTexto.splice(i, 4, "o")
		}
		else if (arrayTexto[i] == "u,f,a,t") {
			arrayTexto.splice(i, 4, "u")
		}				
	}

	console.log(arrayTexto)
	

	 let string = arrayTexto.toString();
	 string01 = string.replace(/(,)/gm,"");
	console.log(string01)
	encriptado.innerHTML = string01
	return encriptado.value;
	
}

function copiado() {
	textoNormal.innerHTML = encriptado;
	return textoNormal;

}

botonEnc.onclick = encriptar;
botonDes.onclick = desencriptar;
copiar.onclick = copiar