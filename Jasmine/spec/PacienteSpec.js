describe('Paciente', () => {
  it('Deve calcular o imc', () => {
    
    var paciente = new Paciente('Nicolas', 24, 62, 1.70);

    expect(paciente.imc()).toEqual(62 / (1.70 * 1.70));
  });

  it('Deve calcular os batimentos do paciente no ano', () => {
    
    var paciente = new Paciente('Nicolas', 24, 62, 1.70);

    expect(paciente.batimentos()).toEqual(24 * 365 * 24 * 60 * 80);
  });
});