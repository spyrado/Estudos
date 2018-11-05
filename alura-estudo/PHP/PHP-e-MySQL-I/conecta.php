<?php
//Inicializando variáreis.
$host = 'localhost';
$user = 'root';
$pass = '';
$db_name = 'loja';

//Cria a conexao com o banco de dados.
$con = mysqli_connect($host,$user,$pass,$db_name);