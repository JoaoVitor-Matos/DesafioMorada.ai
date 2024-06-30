import { Router, Request, Response } from 'express';

const router = Router();

const notasDisponiveis = [100, 50, 20, 10, 5, 2];

export const calcularNotas = (valor: number) => {
  const resultado: { [key: number]: number } = {};
  for (const nota of notasDisponiveis) {
    resultado[nota] = Math.floor(valor / nota);
    valor = valor % nota;
  }
  return resultado;
};

router.post('/saque', (req: Request, res: Response) => {
  const { valor } = req.body;

  if (!Number.isInteger(valor) || valor <= 0) {
    return res.status(400).json({ error: 'O valor do saque deve ser um número inteiro positivo.' });
  }

  const resultado = calcularNotas(valor);
  res.json(resultado);
});

export default router;
