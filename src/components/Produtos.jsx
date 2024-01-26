import { useEffect } from "react";
import Card from "./Card";
import { useProductStore } from "./globalStore";

export default function Produtos() {

  /* PEGAR PRODUTOS DO ESTADO */
  const produtos = useProductStore(state => state.produtos);

/*     useEffect(() => {
    /* RENDERIZAR PRODUTOS, QUANDO CARREGAR TALVEZ NAO PRECISE
  }, []) */

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {produtos.map((produto, index) => (
        <Card key={index} produto={produto} />
      ))}
    </div>
  )
}
