
import { Produto, StatusProduto } from '../models/produto';
import { produtosIniciais } from '../models/produtosMock';

export function listarProdutos(): Produto[] {
  return produtosIniciais;
}

export function verificarStatus(
  quantidade: number
): StatusProduto {
  if (quantidade === 0) {
    return 'Sem Estoque';
  }

  if (quantidade <= 5) {
    return 'Estoque Baixo';
  }

  return 'Em Estoque';
}

export function contarProdutos(): number {
  return produtosIniciais.length;
}

export function contarUnidades(): number {
  return produtosIniciais.reduce(
    (total, produto) => total + produto.quantidade,
    0
  );
}

export function contarEstoqueBaixo(): number {
  return produtosIniciais.filter(
    produto => produto.quantidade > 0 &&
      produto.quantidade <= 5
  ).length;
}
