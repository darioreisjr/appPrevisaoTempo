export const Search = () => {

  function searchInput(){
    console.log('Detectou pesquisa')
  }
  return (
    <div className="bg-purple-500 p-3 text-center">
      <h2 className="text-zinc-50 p-3">Digite a cidade que você quer saber a previsão</h2>
      <input className="w-9/12 h-10 pl-3" placeholder="Digite a cidade..." onKeyUp={searchInput} type="text" name="searchInput" />
    </div>
  )
} 