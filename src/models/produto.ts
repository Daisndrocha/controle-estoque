
export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
}

export type StatusProduto =
  | 'Em Estoque'
  | 'Estoque Baixo'
  | 'Sem Estoque';
