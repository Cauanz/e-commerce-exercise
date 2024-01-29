import { create } from 'zustand';

/* ZUSTAND STORE */
export const useProductStore = create(set => ({
   nomeProduto: '',
   descricaoProduto: '',
   precoProduto: 0.0,
   produtos: [],
   setNomeProduto: (nome) => set({ nomeProduto: nome}),
   setDescricaoProduto: (descricao) => set({ descricaoProduto: descricao}),
   setPrecoProduto: (preco) => set({precoProduto: preco}),
   setProdutos: (produto) => set(state => ({ produtos: [...state.produtos, produto]})),
}));