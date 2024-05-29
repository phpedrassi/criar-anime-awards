import React from 'react'

const FiltroMidia = ({handleFrom, handleMidia}) => {
  return (
    <div className='filtro-bar'>
        <label >
            <span>A partir de: </span>
            <select name="year" onChange={(e) => handleFrom(e.target.value)}>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </label>
          <label >
            <span>Mídia: </span>
            <select name="midia" onChange={(e) => handleMidia(e.target.value)}>
              <option value="">--</option>
              <option value="&type=tv">TV</option>
              <option value="&type=ova">OVA</option>
              <option value="&type=ona">ONA</option>
              <option value="&type=movie">Filme</option>
              <option value="&type=special">Especial</option>
              <option value="&type=tv_special">Especial de TV</option>
            </select>
          </label>
    </div>
  )
}

export default FiltroMidia