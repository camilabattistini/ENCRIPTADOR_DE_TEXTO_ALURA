var botonEncriptar = document.querySelector("#encriptar");
var resultado = document.querySelector(".resultado");
var textoResultadoLugar = document.querySelector(".textoResultadoLugar");
var textoEncriptado = "";
var textoDesencriptado = "";
var copiar = document.querySelector(".copiar");
var muñeco = document.querySelector(".muñeco");
var tituloResultado = document.querySelector(".tituloResultado");
var textoResultado = document.querySelector(".textoResultado");




//ENCRIPTANDO EL TEXTO

function encriptarTexto() {
    var texto = document.querySelector(".ingresarTexto").value;
    textoEncriptado = texto.replaceAll("a","ai");
    textoEncriptado = textoEncriptado.replaceAll("e","enter");
    textoEncriptado = textoEncriptado.replaceAll("i","imes");
    textoEncriptado = textoEncriptado.replaceAll("o","ober");
    textoEncriptado = textoEncriptado.replaceAll("u","ufat");
    mostrarResultadoEncriptado(textoResultadoLugar);
}


//DESENCRIPTANDO EL TEXTO

function desencriptarTexto() {
    var texto = document.querySelector(".ingresarTexto").value;
    textoDesencriptado = texto.replaceAll("ufat","u");
    textoDesencriptado = textoDesencriptado.replaceAll("ober","o");
    textoDesencriptado = textoDesencriptado.replaceAll("imes","i");
    textoDesencriptado = textoDesencriptado.replaceAll("enter","e");
    textoDesencriptado = textoDesencriptado.replaceAll("ai","a");
    mostrarResultadoDesencriptado(textoResultadoLugar);
}


//MOSTRANDO EL RESULTADO POR PANTALLA

function mostrarResultadoEncriptado(resultado) {
    resultado.innerHTML = textoEncriptado;
    textoResultadoLugar.style.display = 'block';
    copiar.style.display = 'block';
    muñeco.style.display = 'none';
    tituloResultado.style.display = 'none';
    textoResultado.style.display = 'none';
}

function mostrarResultadoDesencriptado(resultado) {
    resultado.innerHTML = textoDesencriptado;
    copiar.style.display = 'block';
    muñeco.style.display = 'none';
    tituloResultado.style.display = 'none';
    textoResultado.style.display = 'none';
}

//COPIANDO EL RESULTADO
function copiarTexto() {
    var content = document.getElementsByClassName('textoResultadoLugar').innerHTML;
    
    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
    console.log(content);
}
