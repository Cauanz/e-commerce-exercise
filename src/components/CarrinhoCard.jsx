/* eslint-disable react/prop-types */
import { useProductStore } from './globalStore'


export default function CarrinhoCard({ cartProduto, handleQuantity }) {

   const removerProduto = useProductStore(state => state.setRemoverProduto);

   const handleRemoveProduct = (id) => {
      removerProduto(id)
   }

   return (
      <div className="grid gap-4 m-2.5 overflow-x-auto w-9/12">
      <div className="flex w-full h-full justify-between">
      <div className="flex">
         <img src={cartProduto.produto.image} className="w-36 max-h-32" alt="" />
         <div className="flex flex-col mx-3">
            <p>{cartProduto.produto.title}</p>
            <p>{cartProduto.produto.descricao}</p>
            <p>R$ {cartProduto.produto.price} x {cartProduto.quantity}</p>
            <button
            type="button"
            className="inline-flex mt-2 w-12 justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-36"
            onClick={() => handleRemoveProduct(cartProduto.produto.id)}>
            Remover produto
            </button>
         </div>
      </div>

      {/* //TODO - Melhorar card, tamanho, quantidade etc... */}

      <div className="h-full flex items-center">
         <p>Quantidade: </p>
         <div className="h-7 flex">
               <label htmlFor="Quantity" className="sr-only">
               Quantity
               </label>
               <select
               id="Quantity"
               name="Quantity"
               className="h-full rounded-md border-current border-solid border-2 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm" onChange={(e) => handleQuantity(cartProduto, e)} value={cartProduto.quantity}>
                  Quantity
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
               <option>6</option>
               <option>7</option>
               <option>8</option>
               <option>9</option>
               <option>10</option>
               </select>
            </div>
      </div>
      </div>
   </div>
   )
}
