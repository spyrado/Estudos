<?php require("cabecalho.php"); 
require("conecta.php"); 
require("banco-produto.php");

$id = $_GET["id"];

removeProduto($con,$id);
header("Location: produto-lista.php?removido=true");
die();
?> 
