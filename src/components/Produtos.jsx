import { useEffect } from "react";
import Card from "./Card";
import { useProductStore } from "./globalStore";
import axios from "axios";

export default function Produtos() {

  /* PEGAR PRODUTOS DO ESTADO */
  const produtos = useProductStore(state => state.produtos);

  //SET PRODUTOS SOMENTE PARA USO NO FETCH, INTERFERE DIRETAMENTE NO ARMAZENAMENTO DE PRODUTOS MANUAL
  const setProdutos = useProductStore(state => state.setProdutos);

  useEffect(() => {
    const fetch = async () => {
      axios.get('https://fakestoreapi.com/products')
      .then(res => {
          setProdutos(res.data)
        })
    }
    fetch();
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-2.5">
      {produtos.map((produto) =>
          <Card key={produto.id} produto={produto} />
      )}
    </div>
  )
}
