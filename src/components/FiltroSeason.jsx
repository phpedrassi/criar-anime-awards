import React from 'react'

const AnimeFiltroSeason = ({handleAno, handleSeason}) => {
  return (
    <div className='filtro-bar'>
        <label >
            <span>Ano: </span>
            <select name="year" onChange={(e) => handleAno(e.target.value)} >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </label>
          <label >
            <span>Temporada: </span>
            <select name="season" onChange={(e) => handleSeason(e.target.value)} >
              <option value="winter">Janeiro</option>
              <option value="spring">Abril</option>
              <option value="summer">Júlho</option>
              <option value="fall">Outubro</option>
            </select>
          </label>
    </div>
  )
}

export default AnimeFiltroSeason