/* eslint-disable react/prop-types */


export default function CarrinhoCard({ cartProduto }) {
   return (
      <div className="grid gap-4 m-2.5 overflow-x-auto w-9/12">
      <div className="flex w-full h-full justify-between">
      <div className="flex">
         <img src="https://placehold.co/100x100" className="w-36" alt="" />
         <div className="flex flex-col mx-3">
            <p>{cartProduto.nome}</p>
            <p>{cartProduto.descricao}</p>
            <p>{cartProduto.preco}</p>
         </div>
      </div>
      <div className="h-full flex items-center">
         <div className="h-7 flex">
               <label htmlFor="Quantity" className="sr-only">
               Quantity
               </label>
               <select
               id="Quantity"
               name="Quantity"
               className="h-full rounded-md border-current border-solid border-2 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
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