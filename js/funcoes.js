function trocaImagem() {
	document.getElementById("myImage").src="img/html-logo-badge-512.png";
}
function imagemTroca() {
	document.getElementById("myImage").src="img/js-logo-badge-512.png";
}
function trocaFonte() {
	document.getElementById("demo").style.fontSize="100px";
}
function trocaFonteMaior() {
	document.getElementById("demo").style.fontSize="35px";
	
}
function trocaFontemenor(){
	document.getElementById("demo").style.fontSize="16px";
	
}
function OlcutarElemento(){
	document.getElementById("demo").style.display="none";
}
function naoolcultarElemento(){
	document.getElementById("demo").style.display="block";
	
}
function calcular(){
	document.getElementById("demo").innerHTML = parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value);
}
	
	
	
	
	