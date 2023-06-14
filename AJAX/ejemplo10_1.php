<?php  
//recogemos el personaje elegido por el usuario
$miimagen=$_POST["personaje"]; 
//según el personaje devolvemos una u otra url:
switch ($miimagen) { 
    case "mortadelo":
    echo "objetos/mortadelo.gif";
    break;
    case "filemon":
    echo "objetos/Filemon.gif";
    break;
    case "super" :
    echo "objetos/super_vicente.gif";
    break;
    default:
    echo "";
    }
?>