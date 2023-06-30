import { useState } from "react";

function Search() {

  const [cidade, setCidade] = useState("")

  function seachInput(e) {
    e.preventDefault();
    setCidade("")
    let currentValue = document.querySelector('input[name=seachInput]').value
    alert(currentValue)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { main, name, sys, weather } = data
        if (sys != undefined) {

          if (weather != undefined) {
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
            setCidade(`
            <p>${main.temp}</p>
            <p>${sys.country}</p>
            <p>${name}</p>
            <p>${weather[0]['description']}</p>
            <img src="${icon}"/>`
            )
          }
        } else {
          setCidade("")
        }

      })
  }



  return (
    <div className="searchWraper">
      <div className="search" >
        <h2>Digite a cidade que você que saber a previsão... 👇🏼 </h2>
        <form onSubmit={(e) => seachInput(e)}>
          <input placeholder="Digite a cidade..." type="text" name="seachInput" />
          <input type="submit" value="Pesquisar" />
        </form>
      </div>

      {
        (cidade != "") ?
          <div dangerouslySetInnerHTML={{ __html: cidade }} /> :
          <div>Pesquise por algo acima...</div>
      }

    </div>
  )
}

export default Search