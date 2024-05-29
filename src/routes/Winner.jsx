import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { AwardContext } from '../context/AwardContext'

import './Winner.css'
import PremioFicha from '../components/PremioFicha'

const Winner = () => {
  const [awardState, dispatch] = useContext(AwardContext)

  return (
    <div className="winner-container">
      {awardState.length === 0 ? <h2 className='winner-container-falta' >Falta Informação:</h2> : <h1 className='winner-container-title'>Seu Anime Awards</h1>}

      <ul className="premiacao-container">
        {awardState.length === 0 && <p className='premiacao-falta'>Sem categoria</p>}
        {awardState && awardState.map((item) => (
          <li key={item.id_cat}>
            {item.indicados.length > 0 ? 
            <PremioFicha CategoryName={item.nome_da_categoria || "Sem nome..."} idCat={item.id_cat}/> : ""
          }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Winner