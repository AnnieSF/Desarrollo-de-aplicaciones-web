//crear abjeto XMLHttpRequest
function creaObjetoAjax () { 
    var obj; //variable que recoger&aacute; el objeto
    if (window.XMLHttpRequest) { //c&oacute;digo para mayor&iacute;a de navegadores
       obj=new XMLHttpRequest();
       }
    else { //para IE 5 y IE 6
       obj=new ActiveXObject(Microsoft.XMLHTTP);
       }
    return obj; //devolvemos objeto
    }
//funci&oacute;n constructora del objeto:			 
function ObjetoAjax () {
    var nuevoajax=creaObjetoAjax()
    this.objeto=nuevoajax;
    this.pedirTexto=pedirTextoAjax;
        this.cargaXML=cargarXML;
    this.cargaTexto=cargarTexto;
    }			
//funci&oacute;n para el m&eacute;todo objeto.pedirTexto(url,id) 		
function pedirTextoAjax(url,id) {
    var nuevoajax=this.objeto;
    var idajax=id;
    nuevoajax.open("GET",url,true);
    nuevoajax.onreadystatechange=function () {  
       if (nuevoajax.readyState==4 && nuevoajax.status==200) {
          var textoAjax=nuevoajax.responseText;
          document.getElementById(idajax).innerHTML=textoAjax;
          }
       }
    nuevoajax.send(); 
    }
/*funci&oacute;n del m&eacute;todo cargaXML: devuelve el DOM del XML	
como par&aacute;metro de la funci&oacute;n que le pasamos*/
function cargarXML(url,funcion) {
    var nuevoajax=this.objeto; 
    var funcionXML=funcion 
    nuevoajax.open("GET",url,true);
    nuevoajax.onreadystatechange=function() { 
       if (nuevoajax.readyState==4 && nuevoajax.status==200) {
          var propiedad=nuevoajax.responseXML; 
          funcionXML(propiedad);
          }
       }	
    nuevoajax.send();
    }	
//funci&oacute;n del m&eacute;todo cargaTexto: 
//devuelve el texto del archivo en el par&aacute;metro.
function cargarTexto(url,funcion) {
    var nuevoajax=this.objeto; 
    var funcionTexto=funcion 
    nuevoajax.open("GET",url,true);
    nuevoajax.onreadystatechange=function() { 
       if (nuevoajax.readyState==4 && nuevoajax.status==200) {
          var nuevoTexto=nuevoajax.responseText; 
          funcionTexto(nuevoTexto);
          }
       }	
    nuevoajax.send();
    }	
        
//Funci&oacute;n para enviar datos por POSI y devolver en un id: 
function pedirPorPost(url,id,datos) {
    //variables que utilizamos en la funci&oacute;n (locales)
    var nuevoajax=this.objeto; //creamos objeto XMLHttpRequest
    var idajax=id; //lugar de la p&aacute;gina para insertar la respuesta
    var datosajax=datos; //datos a enviar por POST
    //Preparar el envio con open()
    nuevoajax.open("POST",url,true);
    //cambiar las cabeceras para el envio por POST
    nuevoajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    nuevoajax.setRequestHeader("Content-length", datosajax.length);
    nuevoajax.setRequestHeader("Connection", "close");
    //evento que activa la respuesta: 
    nuevoajax.onreadystatechange=function () {  
       if (nuevoajax.readyState==4 && nuevoajax.status==200) { //al acabar de cargarse
          var textoAjax=nuevoajax.responseText; //recibir respuesta
          document.getElementById(idajax).innerHTML=textoAjax; //insertarla en la p&aacute;gina
          }
       }
    //envio de los datos por send()
    nuevoajax.send(datosajax); 
    } 
//Asociar la funci&oacute;n anterior con el m&eacute;todo "pedirPost" de ObjetoAjax mediante "prototype";	
ObjetoAjax.prototype.pedirPost=pedirPorPost;	 

//envia datos por post y recoge el resultado en el par&aacute;metro de una funci&oacute;n:
//devuelve el texto del archivo en el par&aacute;metro.
function cargarPost(url,funcion,datos) {
    var nuevoajax=this.objeto; 
    var funcionTexto=funcion 
    var datosajax=datos;
    nuevoajax.open("POST",url,true);
    nuevoajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    nuevoajax.setRequestHeader("Content-length", datosajax.length);
    nuevoajax.setRequestHeader("Connection", "close");
    nuevoajax.onreadystatechange=function() { 
       if (nuevoajax.readyState==4 && nuevoajax.status==200) {
          var nuevoTexto=nuevoajax.responseText; 
          funcionTexto(nuevoTexto);
          }
       }	
    nuevoajax.send(datosajax);
    }
ObjetoAjax.prototype.cargaPost=cargarPost;	