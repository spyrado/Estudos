<?php  

function listaProdutos($con){
    $produtos = [];
    $resultado = mysqli_query($con, "select * from produtos");
    while($produto = mysqli_fetch_assoc($resultado)){
        array_push($produtos, $produto);
    }
    
    return $produtos;
}

function insereProduto($con,$nome,$valor,$descricao){
    // Insere produtos no banco
    $query = "insert into produtos(nome, preco, descricao) values ('{$nome}',{$valor}, '{$descricao}')";
    
    return mysqli_query($con, $query);
}

function removeProduto($con,$id){
    return mysqli_query($con, "delete from produtos where id = {$id}");
}