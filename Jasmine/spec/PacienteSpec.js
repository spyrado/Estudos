describe('Paciente', () => {
  it('Deve calcular o imc', () => {
    
    var paciente = new Paciente('Nicolas', 24, 62, 1.70);

    expect(paciente.imc()).toEqual(62 / (1.70 * 1.70));
  });
});