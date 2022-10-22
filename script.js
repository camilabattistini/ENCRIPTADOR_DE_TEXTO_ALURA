var botonEncriptar = document.querySelector("#encriptar");
var resultado = document.querySelector(".resultado");
var textoResultadoLugar = document.querySelector(".textoResultadoLugar");
var textoEncriptado = "";
var textoDesencriptado = "";
var copiar = document.querySelector(".copiar");
var muñeco = document.querySelector(".muñeco");
var tituloResultado = document.querySelector(".tituloResultado");
var textoResultado = document.querySelector(".textoResultado");
var texto = "";


//ENCRIPTANDO EL TEXTO

function encriptarTexto() {
    texto = document.querySelector(".ingresarTexto").value;
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['a', 'ai'], ['u', 'ufat']];
    texto = texto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    mostrarResultado(textoResultadoLugar);
}


//DESENCRIPTANDO EL TEXTO

function desencriptarTexto() {
    texto = document.querySelector(".ingresarTexto").value;
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['a', 'ai'], ['u', 'ufat']];
    texto = texto.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(texto.includes(matrizCodigo[i][1])) {
            texto = texto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    mostrarResultado(textoResultadoLugar);
}


//MOSTRANDO EL RESULTADO POR PANTALLA

function mostrarResultado(resultado) {
    resultado.innerHTML = texto;
    textoResultadoLugar.style.display = 'block';
    copiar.style.display = 'block';
    muñeco.style.display = 'none';
    tituloResultado.style.display = 'none';
    textoResultado.style.display = 'none';
}



//COPIANDO EL RESULTADO
function copiarTexto() {
    navigator.clipboard.writeText(texto);
}
