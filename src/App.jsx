import { useState } from 'react'
import Header from './components/Header'
import { useProductStore } from './components/globalStore';
import Produtos from './components/Produtos';

function App() {

  /* const produtos = useProductStore(state => state.produtos); */

  //Versao antiga usando state, agora usando store do zustando em um arquivo proprio
/*   const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState(''); 
  */

  return (
    <>
      <Header />
      <Produtos />
    </>
  )
}

export default App
