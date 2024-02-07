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

      const produtoCarrinho = {
         produto: produto,
         quantity: "1"
      }

      return { carrinho: [...state.carrinho, produtoCarrinho]}
   }),

   setQuantidadeProduto: (idProduto, novaQuantidade) => set(state => {

      const indiceProduto = state.carrinho.findIndex((p) => p.produto.id === idProduto);

      if(indiceProduto === -1) return state;
      
      const novoCarrinho = [...state.carrinho];
      novoCarrinho[indiceProduto].quantity = novaQuantidade;

      return { carrinho: novoCarrinho };
   }),

   setValorProduto: (idProduto, novaQuantidade) => set(state => {

      const indexProduto = state.carrinho.findIndex((p) => p.produto.id === idProduto);

      if(indexProduto === -1) return state;

      const novoCarrinho = [...state.carrinho];
      const precoOriginal = parseFloat(novoCarrinho[indexProduto].produto.originalPrice);
      novoCarrinho[indexProduto].produto.price = (precoOriginal * novaQuantidade).toString();

      return { carrinho: novoCarrinho };
   }),

   setProduto: () => set(state => {
      const produto = {
         id: state.produtos.length,
         title: state.nomeProduto,
         descricao: state.descricaoProduto,
         price: state.precoProduto,
         originalPrice: state.precoProduto
      };
      return { produtos: [...state.produtos, produto], nomeProduto: '', descricaoProduto: '', precoProduto: 0.0 };
   })
}));