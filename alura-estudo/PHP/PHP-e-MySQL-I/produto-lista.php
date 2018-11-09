<?php 
require("cabecalho.php"); 
require("conecta.php"); 
require("banco-produto.php");
?>

<?php 
    if(array_key_exists("removido", $_GET) && $_GET['removido'] === "true"){
?> 

    <p class="alert-success">Produto removido com sucesso.</p>
        <script>
            $(function() { 
                $('.alert-success').slideDown();
                setTimeout(function(){
                     $('.alert-success').slideUp(); 
                }, 2000);
            });
        </script>
    
<?php 
    }
?> 


<table class="table table-bordered table-striped">
    
    <?php 
    
        $produtos = listaProdutos($con);
        
        foreach($produtos as $produto){ ?>
            <tr>
                <td><?= $produto["nome"] ?></td>
                <td><?= $produto["preco"] ?></td>
                <td><?= $produto["descricao"] ?></td>
                <td>
                <a href="remove-produto.php?id=<?=$produto["id"]?>" class="text-danger">remover</a>
                </td>
            </tr>
      <?php } ?> 

    
</table>
<?php require("rodape.php"); ?> 