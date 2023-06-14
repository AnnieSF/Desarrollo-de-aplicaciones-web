//funci&oacute;n enviar para enviar datos:
function enviar() {
    //recoger dato del select del formulario:
     lista = document.imagenes.personajes;
		 seleccion = lista.options[lista.selectedIndex].value;
		 misdatos="personaje="+seleccion;
		 //cambiar la imagen: m&eacute;todo cargaPost()
		 ajax1=new ObjetoAjax();
		 ajax1.cargaPost("ejemplo10_1.php",cambiaImagen,misdatos);
		 function cambiaImagen(ruta) {
		     document.getElementById("miimagen").src=ruta;
				 }
		 //cambiar el texto: metodo pedirPost()
		 ajax2=new ObjetoAjax();
		 ajax2.pedirPost("ejemplo10_2.php","mitexto",misdatos);
		 }
		 