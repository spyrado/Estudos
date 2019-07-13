describe('Consulta', () => {

  it('Nao deve cobrar nada se for um retorno', () => {

    var paciente = new Paciente('Nicolas', 24, 62, 1.70);

    var consulta = new Consulta(paciente,[],false,false);

    expect(consulta.preco()).toEqual(0);
  });

  it('Deve cobrar 25 por cada procedimento comum', () => {

    var paciente = new Paciente('Nicolas', 24, 62, 1.70);

    var consulta = new Consulta(paciente,['proc1', 'proc2'],false,false);

    expect(consulta.preco()).toEqual(25 + 25);
  });

  it('Deve cobrar 55, pelo procedimento de raio-x', () => {

    var paciente = new Paciente('Nicolas', 24, 62, 1.70);

    var consulta = new Consulta(paciente,['raio-x'],false,false);

    expect(consulta.preco()).toEqual(55);
  });

  it('Deve cobrar 32, pelo procedimento de gesso', () => {

    var paciente = new Paciente('Nicolas', 24, 62, 1.70);

    var consulta = new Consulta(paciente,['gesso'],false,false);

    expect(consulta.preco()).toEqual(32);
  });

  it('Deve cobrar o dobro do valor, quando for particular', () => {

    var paciente = new Paciente('Nicolas', 24, 62, 1.70);

    var consulta = new Consulta(paciente,['raio-x'],true,false);

    expect(consulta.preco()).toEqual(55 * 2);
  });
});