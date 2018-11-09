<?php 
require("cabecalho.php"); 
require("conecta.php"); 
require("banco-produto.php");


$nome = $_GET["nome"];
$valor = $_GET["preco"];
$descricao = $_GET["descricao"];


if(insereProduto($con,$nome,$valor,$descricao)){ ?>
    <p class="text-success">Produto <?= $nome; ?>, Valor do produto: <?= $valor; ?>   adicionado com sucesso!</p>
<?php } else { 
    $msg = mysqli_error($con);
?> 
    
    <p class="text-danger">Não foi possível adicionar o produto <?= $nome; ?>.<br/> ERROR: <?= $msg; ?></p>
<?php } ?>  
        
<?php require("rodape.php"); ?> 