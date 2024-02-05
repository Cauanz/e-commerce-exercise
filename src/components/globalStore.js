import { create } from 'zustand';

/* ZUSTAND STORE */
export const useProductStore = create(set => ({
   nomeProduto: '',
   descricaoProduto: '',
   precoProduto: 0.0,
   produtos: [],
   carrinho: [],
   setNomeProduto: (nome) => set({ nomeProduto: nome}),
   setDescricaoProduto: (descricao) => set({ descricaoProduto: descricao}),
   setPrecoProduto: (preco) => set({precoProduto: preco}),
/*    addProdutos: (produto) => set(state => ({ produtos: [...state.produtos, produto]})), */
   setProdutos: (produtos) => set({ produtos }),

   setCarrinho: (produto) => set(state => {
      
      const produtoExistente = state.carrinho.find((p) => p.id === produto.id)

      if(produtoExistente) return state;

      return { carrinho: [...state.carrinho, produto]}
   }),

   setProduto: () => set(state => {
      const produto = {
         id: state.produtos.length,
         title: state.nomeProduto,
         descricao: state.descricaoProduto,
         price: state.precoProduto
      };
      return { produtos: [...state.produtos, produto], nomeProduto: '', descricaoProduto: '', precoProduto: 0.0 };
   })
}));