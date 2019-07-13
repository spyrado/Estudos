describe('MaiorMenor', () => {
  it('Deve entender numeros em ordem nao sequencial', () => {
    var algoritmo = new MaiorMenor();
    algoritmo.encontra([5,15,7,9]);

    expect(algoritmo.pegaMaior()).toEqual(15);
    expect(algoritmo.pegaMenor()).toEqual(5);
  });

  it('Deve entender numeros em ordem crescente', () => {
    var algoritmo = new MaiorMenor();
    algoritmo.encontra([0,1,2,3,4]);

    expect(algoritmo.pegaMaior()).toEqual(4);
    expect(algoritmo.pegaMenor()).toEqual(0);
  });

  it('Deve entender numeros em ordem decrescente', () => {
    var algoritmo = new MaiorMenor();
    algoritmo.encontra([4,3,2,1,0]);

    expect(algoritmo.pegaMaior()).toEqual(4);
    expect(algoritmo.pegaMenor()).toEqual(0);
  });
});