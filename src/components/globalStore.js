import { create } from 'zustand';

/* ZUSTAND STORE useProductStore */
export const useProductStore = create(set => ({
   nomeProduto: '',
   precoProduto: 0.0,
   produtos: [],
   carrinho: [],
   setNomeProduto: (nome) => set({ nomeProduto: nome}),
   setPrecoProduto: (preco) => set({precoProduto: preco}),
   setProdutos: (produtos) => set(() => { 

      const novoProduto = produtos.map(produto => ({
         id: produto.id,
         title: produto.title,
         price: produto.price,
         originalPrice: produto.price,
         image: produto.image
      }))

      return { produtos: [...novoProduto] }
   }),

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
      novoCarrinho[indexProduto].produto.price = (precoOriginal * novaQuantidade).toFixed(2).toString();

      return { carrinho: novoCarrinho };
   }),

   setProduto: () => set(state => {
      const produto = {
         id: state.produtos.length,
         title: state.nomeProduto,
         price: state.precoProduto,
         originalPrice: state.precoProduto
      };
      return { produtos: [...state.produtos, produto], nomeProduto: '', precoProduto: 0.0 };
   }),

   setRemoverProduto: (idProduto) => set(state => {
      const novoCarrinho = state.carrinho.filter((p) => p.produto.id !== idProduto);

      return { carrinho: novoCarrinho };
   }),
}));