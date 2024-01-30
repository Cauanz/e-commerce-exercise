import Header from "./Header";

export default function Carrinho() {
    //TODO - Implementar carrinho

    //TODO - Terminar o estilo dos cards dos itens
    //TODO - Terminar a implementação do estado do carrinho, e suas respectivas funções
    //TODO - Talvez fazer icone de quantidade de itens no carrinho (no icone do carrinho)
  return (
    <div>

      <Header />

      {/* LOGICA PARA CASO O CARRINHO ESTEJA VAZIO MOSTRAR ICONE DE ALGO E ESCRITO O CARRINHO ESTA VAZIO OU NAO TEM NADA */}

      {/* ADICIONAR FUNCAO MAP PARA CADA ITEM */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-2.5">
        <div className="flex flex-col w-full h-full">
          <img src="https://placehold.co/100x100" className="w-36" alt="" />
          <div>
            {/* PRODUTO NOME produto.name? */}
            {/* PRODUTO DESCRICAO produto.descricao? */}
            {/* PRODUTO PRECO produto.preco? */}
            <p>NOME</p>
            <p>DESCRICAO</p>
            <p>PRECO</p>
            <div className="flex items-center">
              <label htmlFor="Quantity" className="sr-only">
                Quantity
              </label>
              <select id="Quantity" name="Quantity" className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
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

    </div>
  )
}
