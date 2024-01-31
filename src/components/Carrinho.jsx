import CarrinhoCard from "./CarrinhoCard";
import Header from "./Header";
import { useProductStore } from "./globalStore";

export default function Carrinho() {

  //TODO - Implementação do carrinho quase pronto, concertar CSS, e propriedades dos produtos não aparecendo no carrinho, apenas o componente sendo criado
  //TODO - Talvez fazer icone de quantidade de itens no carrinho (no icone do carrinho)

  const produtos = useProductStore(state => state.produtos);

  return (
    <div>
      <Header />

      {/* LOGICA PARA CASO O CARRINHO ESTEJA VAZIO MOSTRAR ICONE DE ALGO E ESCRITO O CARRINHO ESTA VAZIO OU NAO TEM NADA */}

    <div className="grid">
      {produtos.map((produto) => (
        <CarrinhoCard key={produto.id} cartProduto={produtos} />
      ))}

      <div className="top-0 right-0 bg-gray-200 p-4 flex justify-evenly">
        {/* EXIBIR O PREÇO TOTAL FIXO AQUI */}
        <h3>Preco total</h3>
        <h2>R$ 120</h2>
      </div>
    </div>
    </div>
  );
}
