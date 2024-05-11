
import { useState, useEffect } from 'react';
import characterImages from '../../public/images';
import Search from './Search';



const MiApi = () => {
  const [personajeApi, setPersonajeApi] = useState([]);
  const [search, setSearch] = useState('');
  const URL = 'https://swapi.dev/api/people';

  const traerPersonajes = async () => {
    try {
      const data = await fetch(URL);
      const result = await data.json();
      const personajes = result.results;
      setPersonajeApi(personajes);
      

    } catch (error) {
      console.log("No trae los datos");
    }
  }

    //Función que captura las búsquedas
    const handleChange = (e) => {
      setSearch(e.target.value);
    };

  useEffect(() => {
    traerPersonajes()
  }, [])

  let personajesAmostrar = [];

  if (search === "") {
    //Pregunta si Rick === a un string vacio
    personajesAmostrar = personajeApi

  } else {
    personajesAmostrar = personajeApi.filter((personaje) =>
      // eslint-disable-next-line react/prop-types
      personaje.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  return (
    <>
    <h1 className='text-center text-white'>Filtrar Personaje</h1>
    <Search search={search} handleChange={handleChange}/>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {
          personajesAmostrar.map((personaje, key) =>
          (
            <div key={key} className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
              <img className="w-full" src={characterImages[personaje.name]} alt="" />

              <div className="desc p-4 text-gray-800">
              <h2 className='text-center'>Nombre</h2>
                <span className="description text-sm text-center block py-2 border-gray-400 mb-2 text-blue-400">{personaje.name}</span>
                <h2 className='text-center'>Día de Nacimiento</h2>
                <span className="description text-sm text-center block py-2 border-gray-400 mb-2 text-gray-600">{personaje.birth_year}</span>
                <h2 className='text-center'>Masa Corporal</h2>
                <span className="description text-sm text-center block py-2 border-gray-400 mb-2 text-red-400">{personaje.mass}</span>
              </div>
            </div>

          )
          )
        }
        
        
          {personajesAmostrar.length == 0 ? <p className='flex flex-col text-center items-center md:col-span-4 text-white' >No se encontraron resultados</p> : " "}


      </div>

    </>
  )
}

export default MiApi