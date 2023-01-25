import React, {useState, useEffect, useRef} from 'react';


function RickMorty() {
    const [personajes, setPersonajes] = useState([]);
    const [pagina, setPagina] = useState(1);

    const subtitle = useRef();
    
    useEffect(()=>{
        console.log('%cSe montó el componente', 'color: green');
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then( data => {
            setPersonajes(data.results)
        })
        .catch( error => console.error(error))
    }, []);
    const cargarMas = async () =>{
        await setPagina( pagina + 1);
        fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
        .then(response => response.json())
        .then( data => {
            setPersonajes(data.results)
        })
        .catch( error => console.error(error))

    };
    const cambiarH2 = () => {
        subtitle.current.style.color = 'red'
    }
  return (
    <div>
        <h2 ref={subtitle}> Soy el componente Rick and Morty</h2>
        <button onClick={cambiarH2}>Cambiar el H2</button>
        <ul>
            { personajes.length === 0 && <p> Cargando</p>}
            {
                personajes.map((personaje, i) => {
                    return (
                        <li key={i}>
                            <h3>{personaje.name}</h3>
                            <img src={personaje.img} alt="avatar" width='150' />
                        </li>
                    )
                })
            }
            <button onClick={cargarMas}>Siguiente Pagina</button>
        </ul>
    </div>
  )
}

export default RickMorty