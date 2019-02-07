describe('MaiorMenor', function(){
   it('Deve entender numeros em ordem nao sequencial', function(){
       var algoritmo = new MaiorEMenor();
       algoritmo.encontra([9]);

       expect(algoritmo.pegaMaior()).toEqual(9);
       expect(algoritmo.pegaMenor()).toEqual(9);

   }); 
});