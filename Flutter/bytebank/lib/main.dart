// import 'package:flutter/material.dart';

import 'package:flutter/material.dart';

void main() => runApp(ByteBankApp());

class ByteBankApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      home: Scaffold(
        body: FormularioTransferencia(),
      ),
    );
  }
}

class FormularioTransferencia extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Criando Transferências'),
        centerTitle: false,
        backgroundColor: Color.fromRGBO(109, 33, 119, 1),
      ),
      body: Column(children: < Widget > [
        TextField(
          decoration: InputDecoration(
            labelText: 'Digite um valor',
            hintText: '0000'
          ),
        ),
        TextField(),
      ], ),
    );
  }
}

class ListaTransferencias extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Transferências'),
        centerTitle: false,
        backgroundColor: Color.fromRGBO(109, 33, 119, 1),
      ),
      body: Column(children: < Widget > [
        ItemTransferencia(
          Transferencia(200, 1345)
        ),
        ItemTransferencia(
          Transferencia(345, 2665)
        ),
        ItemTransferencia(
          Transferencia(7650, 8762)
        ),
      ], ),
      floatingActionButton: FloatingActionButton(
        child: Icon(
          Icons.add
        ),
        backgroundColor: Color.fromRGBO(109, 33, 119, 1),
        onPressed: () {},
      ),
    );
  }

}

class ItemTransferencia extends StatelessWidget {

  final Transferencia _transferencia;

  ItemTransferencia(this._transferencia);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: Icon(
          Icons.monetization_on
        ),
        title: Text(_transferencia.valor.toString()),
        subtitle: Text(_transferencia.numeroConta.toString()),
      )
    );
  }
}

class Transferencia {
  final double valor;
  final int numeroConta;

  Transferencia(this.valor, this.numeroConta);
}