<?php

$array = [0,1,2,3,4];
$con = mysqli_connect('localhost','root','','loja');

function listaProdutos($con){
    $produtos = [];
    $result = mysqli_query($con,"select * from produtos");
    while($row = mysqli_fetch_assoc($result)){
        array_push($produtos, $row);
    }
    
    return $produtos;
}
$produtos = listaProdutos($con);
        echo '<pre>';
            print_r($produtos);
        echo '</pre>';

function deletaProdutos($con){
    mysqli_query($con,"delete from produtos where id = {$id}");
}

function insereProdutos($con){
    mysqli_query($con,"insert into produtos(nome, preco) values ('{$name}',{$preco})");
}
?>