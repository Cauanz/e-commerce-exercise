

export default function Card({ produto }) {


  return (
    <div className="flex flex-col w-80 h-96">
      <img src="#" alt="#" />
      <h4>{produto.name}</h4>
      <h5>{produto.preco}</h5>
    </div>
  )
}
