import { useState } from 'react'
import { Produto } from './Produto'

export function App() {
  const [dados, setDados] = useState(null)
  const [ carregando, setCarregando ] = useState(null)

  async function handleClick(event) {
    setCarregando(true)

    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)

    const json = await response.json()

    setDados(json)
    setCarregando(false)
  }

  return (
    <>
      <button style={{backgroundColor: 'Blue', color: 'white', margin: '1rem', padding: '1rem', border: 'none', borderRadius: '8px'}} onClick={handleClick}>
        notebook
      </button>

      <button style={{backgroundColor: 'Blue', color: 'white', margin: '1rem', padding: '1rem', border: 'none', borderRadius: '8px'}} onClick={handleClick}>
        smartphone
      </button>

      <button style={{backgroundColor: 'Blue', color: 'white', margin: '1rem', padding: '1rem', border: 'none', borderRadius: '8px'}} onClick={handleClick}>
        tablet
      </button>

      { carregando && <p>Carregando...</p> }
      { !carregando && dados && <Produto dados={dados} />}
    </>
  )
}