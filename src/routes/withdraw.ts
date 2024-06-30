import { Router, Request, Response } from 'express';

const router = Router();

const notasDisponiveis = [100, 50, 20, 10, 5, 2];

export const calcularNotas = (valor: number) => {
  const resultado: { [key: number]: number } = {};
  let valorRestante = valor;

  for (const nota of notasDisponiveis) {
    resultado[nota] = Math.floor(valorRestante / nota);
    valorRestante = valorRestante % nota;
  }

  return { resultado, valorRestante };
};

router.post('/saque', (req: Request, res: Response) => {
  const { valor } = req.body;

  if (!Number.isInteger(valor) || valor <= 0) {
    return res.status(400).json({ error: 'O valor do saque deve ser um número inteiro positivo.' });
  }

  try {
    const { resultado, valorRestante } = calcularNotas(valor);

    if (valorRestante !== 0) {
      return res.status(200).json({
        notas: resultado,
        mensagem: `Saque feito de ${valor - valorRestante} reais. ${valorRestante} real(is) faltante(s) pois não temos notas de 1 real.`
      });
    }

    res.json({ notas: resultado });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao processar o saque.' });
  }
});

export default router;
