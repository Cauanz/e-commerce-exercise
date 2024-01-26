import { useState } from 'react'
import Header from './components/Header'
import { useProductStore } from './components/globalStore';
import Produtos from './components/Produtos';

function App() {

  const produtos = useProductStore(state => state.produtos);

  //Versao antiga usando state, agora usando store do zustando em um arquivo proprio
/*   const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState(''); 
  */

  return (
    <>
      <Header />

    {/* ESSA RENDERIZACAO DE PRODUTOS E PROVISORIA PARA INTUITO DE DEVELOPMENT, NAO TEM NADA A VER COM A VERSAO FINAL QUE INCLUE UM COMPONENTE CARD */}
{/*     {produtos.map((produto, index) => (
        <div key={index}>
          <h2>{produto.nome}</h2>
          <p>{produto.descricao}</p>
        </div>
      ))} */}

      <Produtos />
    </>
  )
}

export default App
