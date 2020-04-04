import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContenedorDeTarjetas from './components/ContenedorDeTarjetas'
import gatos from './assets/gatos';

const nombre = "Adopt#Adas"

const App = () => {

  const [ gatosFiltrados, setGatosFiltrados ] = useState([...gatos])
  const [ state, setState ] = useState({
    color: [],
    sexo: '',
    nombre: '',
    edad: '',
    extras: [],
  })

  const handleChange = e => {
    if (Array.isArray(state[e.target.name])) {
    setState({...state, [e.target.name]: [...state[e.target.name], e.target.value]})
    }
    else {
      setState({...state, [e.target.name]: e.target.value})
    }

    if (e.target.name === "sexo") {
      setGatosFiltrados(gatos.filter(gato => (
        e.target.value === "m" || e.target.value === "f" ? gato.sexo === e.target.value : gato
        )))
    }
  }

  console.log(state)
  return (
    <>
      <NavBar propNombre={nombre}/>
      <form>
      <div>
        Negre <input onChange={handleChange} type="checkbox" value="negro" name="color"/>
        Blanque <input onChange={handleChange} type="checkbox" value="blanco" name="color"/>
        Naranja <input  onChange={handleChange} type="checkbox" value="naranja" name="color"/>
        Tricolor <input  onChange={handleChange} type="checkbox" value="tricolor" name="color"/>
        Rayade <input  onChange={handleChange} type="checkbox" value="rayado" name="color"/>
        </div>
        <div>
         Masculino <input onChange={handleChange} type="radio" value="m" name="sexo"></input>
         Femenino <input onChange={handleChange} type="radio" value="f" name="sexo"></input>
         Indiferente <input  onChange={handleChange} type="radio" value="i" name="sexo"></input>
        </div>
        <div>Nombre
          <input onChange={handleChange} value={state.nombre} type="text" name="nombre" placeholder="nombre"/>
        </div>
        <div>Edad
          <input type="number" onChange={handleChange} name="edad" value={state.edad}></input>
        </div>
        <div>
        Castrado <input onChange={handleChange} type="checkbox" value="castrado" name="extras"/>
        Medicado <input onChange={handleChange} type="checkbox" value="medicado" name="extras"/>
        Mimoso <input onChange={handleChange} type="checkbox" value="mimoso" name="extras"/>

        </div>
      </form>
      <ContenedorDeTarjetas gatos={gatosFiltrados} />
      <Footer />
    </>
  );
}

export default App;
