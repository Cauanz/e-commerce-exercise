import { useEffect } from "react";
import { useProductStore } from "./globalStore"


export default function Card({ produto }) {

  const setCarrinho = useProductStore(state => state.setCarrinho);

  const addToCart = () => {
    setCarrinho(produto)
  }

  useEffect(() => {
    console.log(produto)
  }, [])

  return (
    /* ESTRUTURA CARD ORIGINAL, NAO APAGAR */

/*     <div className="flex flex-col w-80 h-96">
      <img src="https://placehold.co/200x200" className="max-w-80" alt="Imagem do produto" /> {/* IMAGEM PARA TESTE REMOVER QUANDO FUNCIONALIDADE DE ADICIONAR IMAGEM FOR IMPLEMENTADA

      <div className="content flex flex-col p-1">
        <div className="w-full flex justify-between">
          <h4>{produto.nome}</h4>
          <h4>R$ {produto.preco}</h4>
        </div>

        <h5 className="w-full">{produto.descricao}</h5>

        <button className="bg-green-700 rounded-lg text-neutral-50 font-bold" onClick={addToCart}>Add to Cart</button> {/* BOTAO IMPROVISADO PARA TESTAR O ADICIONAR AO CARRINHO *DEVELOPMENT PORPUSES* 
      </div>
  </div> */

  
    /* COPIA PARA USO COM PRODUTOS ORIUNDOS DA API */
    <div className="flex flex-col min-h-72 items-center">
      {produto.image ? (
        <img src={produto.image} className="max-w-80 max-h-72	" alt="Imagem do produto" />
      ) : (
        <img src="https://placehold.co/200x200" className="max-w-80" alt="Imagem do produto" />
      )}

      <div className="content flex flex-col p-1">
        <div className="w-full flex justify-between">
          <h4>{produto.title}</h4>
          <h4>R$ {produto.price}</h4>
        </div>

        <button className="bg-green-700 rounded-lg text-neutral-50 font-bold min-w-80" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}
