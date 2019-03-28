// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

/*****************************************************************************************/
/*****************************************************************************************/
/*****************************************************************************************/
/*****************************************************************************************/
/*****************************************************************************************/
/*****************************************************************************************/
/*****************************************************************************************/
/*****************************************************************************************/
/*****************************************************************************************/
/*
	**************************************************************************************
	**************************************************************************************
	**************************************************************************************
	**************************************************************************************
	UNIVERSIDAD EAN
	FACULTAD DE INGENIERÍA
	PROGRAMA DE INGENERÍA DE SISTEMAS

	**************************************************************************************
	**************************************************************************************
	**************************************************************************************
	DESARROLLO WEB
	TEMA:  EL JUEGO
	Elaboró:
	Esteban Moya // Gilbert Cachaya //Juan Pablo Sotelo
	2018-II
	**************************************************************************************
	**************************************************************************************
	**************************************************************************************
	**************************************************************************************
*/
// variables del script
	var letpista;
	// var codigos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
	// Lista de bestias mitologicas

	var alfabeto =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z',' '];
	var arregloLetras;
	var arreglocodigos;
	var arreglocodificado;
	var arreglocodificado2;
	var codigoElt = document.querySelector("#codigo");

    

//Funciones de la página

function convertirPalabraEnCodigos()
{
	var palabra= document.getElementById("Palabra").value;
	var i;
	var j; 
	var caracter = ' ';
	arregloLetras = new Array(palabra.length);
	arreglocodigos=new Array();
        
	for (i = 0; i < palabra.length; i++)
	{
	 if (palabra.charCodeAt(i)==32 || (palabra.charCodeAt(i)!=209 && palabra.charCodeAt(i)>96 && palabra.charCodeAt(i)<123)){ 
	 caracter = palabra.charAt(i);
	 
	 arregloLetras[i] = caracter;
		for (j=0; j < alfabeto.length; j++){
			if (arregloLetras[i]==alfabeto[j])
			{ 
				arreglocodigos[i]= j+1;
				break;
			}
		} //fin del segundo for
 	 }
	 else {
	 alert ("La letra "+ palabra[i] +" no tiene el formato correcto");
	 break;  
		}
	} //fin del primer for
	
	return arreglocodigos;

} // termina la función convertirPalabraEnCodigos.

function calcularCodificacion(value){
	
	letpista= parseInt(document.getElementById("lista").value);
	
	return (value+letpista)/2;
	
}

function codificacion()
{
    var arreglotemp= convertirPalabraEnCodigos();

	arreglocodificado= arreglotemp.map(calcularCodificacion);

document.getElementById("palabracod").value = arreglocodificado.join("-");
    
}

function decodificacion() {
	var nums= document.getElementById("numerodecod").value;
	letpista= parseInt(document.getElementById("listad").value);
	var i;
	var j; 
	var caracteres = ' ';
	var pista ='';
	console.log(nums.charAt(1));
	

	var numeros=nums.split("-");
	var arreglonumeros = [];
	
	for (i = 0; i < numeros.length; i++)
	{
	 var estado=-1;
	 arreglonumeros[i] = (2*numeros[i])-letpista;
		for(j=0; j < alfabeto.length; j++){
			if (arreglonumeros[i]==j+1){
			arreglocodificado[i]=alfabeto[j];
			caracteres+= arreglocodificado[i];
			estado=1;
			break;
			}
				
	}//fin del segundo for 
	if (estado==-1)
	{
	arreglocodificado[i]= String.fromCharCode(129);
	

	caracteres+= arreglocodificado[i];
	}
	} //fin del primer for
	
document.getElementById("codigo").value = caracteres;

	
	
}

function Getpista(){

	var arreglonumeros2=[];
	letpista= parseInt(document.getElementById("listad").value);
	for (i = 0; i<alfabeto.length; i++ ){
		arreglonumeros2 = (2 * alfabeto[i])-letpista;
		
		document.getElementById("pista").innerHTML = arreglonumeros2;

	}

}