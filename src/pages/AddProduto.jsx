import { PhotoIcon } from '@heroicons/react/24/solid'
import Header from '../components/Header'
import { useProductStore } from '../components/globalStore'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AddProduto() {

  const navigate = useNavigate();

  const setNomeProduto = useProductStore(state => state.setNomeProduto);
  const setDescricaoProduto = useProductStore(state => state.setDescricaoProduto);
  const setProdutos = useProductStore(state => state.setProdutos);
  
  const nomeProduto = useProductStore(state => state.nomeProduto);
  const descricaoProduto = useProductStore(state => state.descricaoProduto);
  const produtos = useProductStore(state => state.produtos);

  const handleNomeChange = (e) => {
    setNomeProduto(e.target.value)
  };

  const handleDescricaoChange = (e) => {
    setDescricaoProduto(e.target.value)
  };

  function handleProduto(e) {
    e.preventDefault();
    
    const produto = {
      id: produtos.length,
      nome: nomeProduto,
      descricao: descricaoProduto
      /* Adicionar preço, é um produto */
    };

    setProdutos(produto);

    setNomeProduto('');
    setDescricaoProduto('');
    navigate('/')
  }

  useEffect(() => {
    console.log(produtos)
  }, [produtos])

  return (
    <div>

    <Header />

      <form onSubmit={handleProduto}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="productName" className="block text-sm font-medium leading-6 text-gray-900">
                Nome do produto
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="productName"
                    id="productName"
                    autoComplete="productName"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 productNameText"
                    placeholder="janesmith"
                    onChange={handleNomeChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Sobre o produto
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="productDescription block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  onChange={handleDescricaoChange}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Foto de capa do produto (opcional)
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Adicionar
        </button>
      </div>
    </form>
    </div>
  )
}
