import { FormEvent, useState } from 'react'
import './App.css'

type Props = {
  name: string;
  age: number;
}

function App() {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [resultado, setResultado] = useState<Props>();

  function handleCalcuo(event: FormEvent){
    event.preventDefault()
    const currentYear = new Date().getUTCFullYear();

    setResultado({
      name: name,
      age: currentYear - Number(year),
    })

    setName("");
    setYear("");
  }

  return (
    <div className='container'>
      <h1 className='title'>Descubra sua Idade</h1>
      
      <form className='formulario' onSubmit={handleCalcuo}>
        <label className='label'>Digite Seu Nome</label>
        <input placeholder='Digite seu nome' 
        className='input' 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

        <label className='label'>Em que ano voce nasceu?</label>
        <input placeholder='Digite o ano de nascimento' 
        className='input'
        type='number'
        value={year}
        onChange={(e) => setYear(e.target.value)}
        />

        <input type='submit' value="Descobrir idade" className='button'/>
      </form>

      {resultado && Object.keys(resultado).length > 0 && (
        <section className='section'>
        <h3 className='section-title'> {resultado?.name} voce tem: <span>{resultado?.age} anos</span> </h3>
      </section>
      )}
    </div>
  )
}

export default App
