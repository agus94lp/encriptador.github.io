var textoAtransformar = document.querySelector(".area");
var resultado = document.querySelector(".resultado");
var btn_encri = document.querySelector(".encri");
var btn_desen = document.querySelector(".desen");

function ocultar(){
    document.querySelector(".texto").classList.add("ocultar");
    document.querySelector(".texto2").classList.add("ocultar");
    document.querySelector(".imagen").classList.add("ocultar");
}

function valorArea(){
    var area = document.querySelector(".area");
    return area.value;
}

function validar(texto){
    for(var i=0;i<texto.length;i++){
        if(texto[i] == "á" || texto[i] == "é" || texto[i] == "í" || texto[i] == "ó" || texto[i] == "ú"){
            return true;
        }
    }
}

function traspaso(){
    if(valorArea()==""){
        alert("Esta vacio para encriptar");
    }
    else if (validar(valorArea())){
        alert("ingrese palabra sin tildes para encriptar");
    }
    else{
        ocultar();
        resultado.textContent = encriptar(valorArea());
    }
}

function traspasodese(){
    if(valorArea()==""){
        alert("Esta vacio para desencriptar");
    }
    else if (validar(valorArea())){
        alert("ingrese palabra sin tildes para desencriptar");
    }
    else{
        ocultar();
        resultado.textContent = desencriptar(valorArea());
    }
}

textoAtransformar.focus();
btn_encri.onclick = traspaso;
btn_desen.onclick = traspasodese;

function encriptar(msj){
    var terminado = "";
    for (var i=0; i<msj.length; i++){
        if(msj[i]== "a"){
            terminado = terminado+ "ai";
        }
        else if(msj[i]== "e"){
            terminado = terminado+ "enter";
        }
        else if(msj[i]== "i"){
            terminado = terminado+ "imes";
        }
        else if(msj[i]== "o"){
            terminado = terminado+ "ober";
        }
        else if(msj[i]== "u"){
            terminado = terminado+ "ufat";
        }
        else{
            terminado= terminado+msj[i];
        }
    }
    return terminado;
}

function desencriptar(msj){
    var terminado = "";
    for (var i=0; i<msj.length; i++){
        if(msj[i]== "a"){
            terminado = terminado+ "a";
            i=i+1;
        }
        else if(msj[i]== "e"){
            terminado = terminado+ "e";
            i+=4;
        }
        else if(msj[i]== "i"){
            terminado = terminado+ "i";
            i+=3;
        }
        else if(msj[i]== "o"){
            terminado = terminado+ "o";
            i+=3;
        }
        else if(msj[i]== "u"){
            terminado = terminado+ "u";
            i+=3;
        }
        else{
            terminado= terminado+msj[i];
        }
    }
    return terminado;
}

function copiar(){
    var contenido = document.querySelector("#textoo")
    contenido.select();
    document.execCommand("copy");
    alert("Copiado!")
    textoAtransformar.value="";
    textoAtransformar.focus();
}

var btn = document.querySelector("#copyy");
btn.onclick = copiar;
