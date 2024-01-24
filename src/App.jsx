import { useState } from 'react'
import Header from './components/Header'
import AddProduto from './pages/AddProduto';

function App() {

  //TODO - Fazer as funções no App e descer elas pelos componentes

  const [produtos, setProdutos] = useState([]);

  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');

  function handleProduto(e) {
    const produto = {
      id: produtos.length,
      nome: nomeProduto,
      descricao: descricaoProduto
    }

    setProdutos([...produtos, produto])
  }

  return (
    <>
      <Header />
    </>
  )
}

export default App
