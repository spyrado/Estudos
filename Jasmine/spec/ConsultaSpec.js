describe('Consulta', () => {

  var paciente;

  beforeEach(() => {
    paciente = PacienteBuilder().constroi();
  });
  
  describe('Consultas do tipo retorno', () => {
    
    it('Nao deve cobrar nada se for um retorno', () => {
  
      var consulta = new Consulta(paciente,[],false,false);
      expect(consulta.preco()).toEqual(0);
    });
  });

  describe('Consultas do tipo procedimento', () => {
    it('Deve cobrar 25 por cada procedimento comum', () => {

      var consulta = new Consulta(paciente,['proc1', 'proc2'],false,false);
      expect(consulta.preco()).toEqual(25 + 25);
    });
  
    it('Deve cobrar 55, pelo procedimento de raio-x', () => {
  
      var consulta = new Consulta(paciente,['raio-x'],false,false);
      expect(consulta.preco()).toEqual(55);
    });
  
    it('Deve cobrar 32, pelo procedimento de gesso', () => {
  
      var consulta = new Consulta(paciente,['gesso'],false,false);
      expect(consulta.preco()).toEqual(32);
    });
  });
  
  describe('Consultas do tipo particular', () => {
    it('Deve cobrar o dobro do valor, quando for particular', () => {
  
      var consulta = new Consulta(paciente,['raio-x'],true,false);
      expect(consulta.preco()).toEqual(55 * 2);
    });
  });
});