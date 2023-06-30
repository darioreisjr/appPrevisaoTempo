function Search() {

  function seachInput() {
    let currentValue = document.querySelector('input[name=seachInput]').value
    alert(currentValue)
  }

  return (
    <div className="search" >
      <h2>Digite a cidade que você que saber a previsão</h2>
      <input placeholder="Digite a cidade..." onKeyUp={seachInput} type="text" name="seachInput" />
    </div>
  )
}

export default Search