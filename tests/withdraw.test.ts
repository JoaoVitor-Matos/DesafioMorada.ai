import { calcularNotas } from '../src/routes/withdraw';

describe('Teste da função calcularNotas', () => {
  test('Deve retornar a quantidade mínima de cédulas para 380', () => {
    const resultado = calcularNotas(380);
    expect(resultado).toEqual({
      100: 3,
      50: 1,
      20: 1,
      10: 1,
      5: 0,
      2: 0,
    });
  });
});
