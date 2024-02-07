import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import CarrinhoCard from "./CarrinhoCard";
import Header from "./Header";
import { useProductStore } from "./globalStore";

export default function Carrinho() {

  //Calcular preco total
  const carrinho = useProductStore(state => state.carrinho);
  const handleCalculate = (cartItems) => {
    return cartItems.reduce((total, item) => total + Number(item.produto.price), 0)
  }
  const total = handleCalculate(carrinho);

  //Mudar quantidade no objeto produto e calcular valor baseado na quantidade
  const setQuantidadeProduto = useProductStore(state => state.setQuantidadeProduto);
  const setValorProduto = useProductStore(state => state.setValorProduto);

  const handleQuantity = (cartProduto, e) => {
    setQuantidadeProduto(cartProduto.produto.id, e.target.value)

    setValorProduto(cartProduto.produto.id, cartProduto.quantity)
  }

  return (
    <div>
      <Header total={total}/>

      {carrinho.length > 0 ? (
      <div className="flex">
      <div className="w-full md:w-4/5 bg-gray-200 p-4 mr-4 md:mr-0">
          {carrinho.map((produtoInCart) => (
            <CarrinhoCard key={produtoInCart.id} cartProduto={produtoInCart} handleQuantity={handleQuantity}/>
          ))}
      </div>
      <div className="hidden md:block w-1/5 bg-blue-200 p-4">
          <h3>Preco total</h3>
          <h2>R$ {handleCalculate(carrinho)}</h2>
      </div>
    </div>
      ) : (
        <div className="flex">
          <div className="text-center py-4 w-full">
            <p className="flex justify-center">O carrinho está vázio <ShoppingCartIcon className="w-6" /></p>
          </div>

          <div className="hidden md:block w-1/5 bg-blue-200 p-4">
          <h3>Preco total</h3>
          <h2>{handleCalculate(carrinho)}</h2>
      </div>
        </div>
      )}


    </div>
  );
}
