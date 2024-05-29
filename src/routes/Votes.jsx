import React from 'react'
import { FaClipboardList, FaClipboard } from 'react-icons/fa';
import { useContext } from 'react'
import { AwardContext } from '../context/AwardContext'
import { NavLink, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

import './Votes.css'
import CategoryAnime from '../components/CategoryAnime';

const Votes = () => {
  const [awardState, dispatch] = useContext(AwardContext)
  const { id } = useParams()
  // const url = "http://localhost:5173/votes/" + id;

  // const { itemsApi:item } = useFetch(url)

  const categoria = awardState.filter((item) => item.id_cat == id)[0]
  const arrIndicados = categoria.indicados

  return (
    <div className='votes-screen-container'>
      <div className="votes-screen-header">
        <h2>{categoria.nome_da_categoria}</h2>
        <button><NavLink to="/criar-anime-awards/animes" className={({ isActive }) => (isActive ? "active" : "")}><FaClipboard /> ADICIONAR...</NavLink>

        </button>
      </div>
      <ul className="votes-screen-list">
        {arrIndicados.length === 0 ? <p className='votes-screen-vazio'>Categoria vazia...</p> : ""}
        {arrIndicados && arrIndicados.map((item) => (
          <li key={item.id_indic}>
            <CategoryAnime idIndic={item.id_indic} nome_indic={item.nome_indic} img_indic={item.img_indic} votos={item.votos} desc_indic={item.desc_indic} idCat={id}/>
          </li>
        ))}
        

      </ul>

    </div>
  )
}

export default Votes