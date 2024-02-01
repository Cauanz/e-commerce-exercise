import { useProductStore } from "./globalStore"


export default function Card({ produto }) {

  const setCarrinho = useProductStore(state => state.setCarrinho);

  const addToCart = () => {
    setCarrinho(produto)
  }

  return (
    <div className="flex flex-col w-80 h-96">
      <img src="https://placehold.co/200x200" className="max-w-80" alt="Imagem do produto" /> {/* IMAGEM PARA TESTE REMOVER QUANDO FUNCIONALIDADE DE ADICIONAR IMAGEM FOR IMPLEMENTADA */}

      <div className="content flex flex-col p-1">
        <div className="w-full flex justify-between">
          <h4>{produto.nome}</h4>
          <h4>R$ {produto.preco}</h4>
        </div>

        <h5 className="w-full">{produto.descricao}</h5>

        <button className="bg-green-700 rounded-lg text-neutral-50 font-bold" onClick={addToCart}>Add to Cart</button> {/* BOTAO IMPROVISADO PARA TESTAR O ADICIONAR AO CARRINHO *DEVELOPMENT PORPUSES* */}
      </div>
    </div>
  )
}
