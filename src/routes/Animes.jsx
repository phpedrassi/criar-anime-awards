import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { FaSearch } from "react-icons/fa";

import './Animes.css'
import AnimeFicha from '../components/AnimeFicha'
import FiltroSeason from '../components/FiltroSeason';
import FiltroSearch from '../components/FiltroSearch'
import FiltroMidia from '../components/FiltroMidia';


const urlBase = "https://api.jikan.moe/v4/"

const Animes = () => {
  const [filter, setFilter] = useState("season")
  const [ano, setAno] = useState(2024)
  const [from, setFrom] = useState(2024)
  const [season, setSeason] = useState("winter")
  const [midia, setMidia] = useState("")
  const [pagina, setPagina] = useState(1)
  const liga = "&page="
  const [minhaListaS, setMinhaListaS] = useState("")
  const [urlUsada, setUrlUsada] = useState(`${urlBase}seasons/${ano}/${season}?sfw=true`)
  const [itemsApi, setItemsApi] = useState(null)





  // FUNÇÕES DE STATE LIFT ////////////////////////////////////////////////////////////////////////////////
  const handleAno = (valor) => {
    setPagina(1)
    setAno(valor)
    setUrlUsada(`${urlBase}seasons/${valor}/${season}?sfw=true`)
    fetchData(`${urlBase}seasons/${valor}/${season}?sfw=true`, applyFilter)
  }

  const handleSeason = (valor) => {
    setPagina(1)
    setSeason(valor)
    setUrlUsada(`${urlBase}seasons/${ano}/${valor}?sfw=true`)
    fetchData(`${urlBase}seasons/${ano}/${valor}?sfw=true`, applyFilter)
  }

  const handleName = (e, valor) => {
    e.preventDefault()
    setUrlUsada(`${urlBase}anime?q=${valor}&order_by=popularity`)
    fetchData(`${urlBase}anime?q=${valor}&order_by=popularity`, applyFilter)
  }

  const handleFrom = (valor) => {
    setPagina(1)
    setFrom(valor)
    setUrlUsada(`${urlBase}anime?start_date=${valor}-01-01${midia}&sfw=true`)
    fetchData(`${urlBase}anime?start_date=${valor}-01-01${midia}&sfw=true`, applyFilter)
  }

  const handleMidia = (valor) => {
    setPagina(1)
    setMidia(valor)
    setUrlUsada(`${urlBase}anime?start_date=${from}-01-01${valor}&sfw=true`)
    fetchData(`${urlBase}anime?start_date=${from}-01-01${valor}&sfw=true`, applyFilter)
  }


  // FUNÇÕES FETCH  /////////////////////////////////////////////////////////////////////////////////////////
  const fetchData = async (urlFiltro, filterFunction) => {
    const res = await fetch(urlFiltro)
    if (!res.ok) {
      throw new Error("Falha ao buscar dados.")
    }
    const json = await res.json()
    await setItemsApi(json)

    filterFunction(json)

    return () => {
      console.log("Componente fetchData desmontado")
    }
  }



  // FUNÇÕES DE FILTER  /////////////////////////////////////////////////////////////////////////////////////
  const applyFilter = (apiItens) => {
    setMinhaListaS(apiItens.data)
  }

  const infiniteScrollFilter = (apiItens) => {
    setMinhaListaS([...minhaListaS, ...apiItens.data])
  }



  // HOOK useEffect  ///////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetchData(`${urlBase}seasons/${ano}/${season}?sfw=true`, applyFilter)
  }, [])


  const chmarFetchScroll = (valor) => {
    fetchData(`${urlUsada}${liga}${valor}`, infiniteScrollFilter)
  }



  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        if (itemsApi?.pagination.has_next_page) {
          setPagina((pagina) => pagina + 1)
          chmarFetchScroll(pagina + 1)
        }
      }
    })
    intersectionObserver.observe(document.querySelector('#fim'))
    return () => intersectionObserver.disconnect()
  }, [minhaListaS])







  return (
    <div className='animes-container'>
      <div className="filter-container">
        <div className="search-form-container">
          <p></p>

        </div>

        <div className="filter-form">
          <label >
            <span>Filtrar por: </span>
            <select name="year" onChange={(e) => { setFilter(e.target.value) }} value={filter}>
              <option value="season">Temporada</option>
              <option value="name">Nome</option>
              <option value="midia">Outra mídia</option>
            </select>
          </label>
          {filter === "season" ? <FiltroSeason handleAno={handleAno} handleSeason={handleSeason} /> : filter === "name" ? <FiltroSearch handleName={handleName} /> : <FiltroMidia handleFrom={handleFrom} handleMidia={handleMidia} />}
        </div>

      </div>

      <div className="ficha-list">
        {!minhaListaS ? "Carregando..." : minhaListaS.map((item, i) => (
          <AnimeFicha key={i} jap={item.title} ing={item.title_english} img={item.images?.webp.image_url} />
        ))}
      </div>
      <div id='fim'><p> </p></div>

    </div>
  )
}

export default Animes