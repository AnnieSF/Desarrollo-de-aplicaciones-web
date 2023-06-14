<?php  
header("Content-Type: text/plain; charset=iso-8859-1"); //Solucionar acentos
//recogemos el personaje elegido por el usuario
$mitexto=$_POST["personaje"];
//según el personaje devolvemos uno u otro texto:
switch ($mitexto) {
    case "mortadelo":
    echo "<p>Es el protagonista de la pareja. 
          Conocido por su afición a los disfraces.</p>";
    break;
    case "filemon":
    echo "<p>Compañero y jefe de Mortadelo, supuesto cerebro del grupo,
          aunque es el que se lleva todas las tortas.</p>";
    break;
    case "super" :
    echo "Jefe de la TIA, agencia donde trabajan Mortadelo y Filemón.</p>";
    break;
    default:
    echo "<p>No hay ningún personaje elegido.</p>";
    }
?>