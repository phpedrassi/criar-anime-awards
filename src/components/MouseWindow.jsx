import React from 'react'
import { useContext, useState, useRef } from 'react'
import { AwardContext } from '../context/AwardContext'
import { useOnClickOutside } from '../hooks/useOnClickOutside'

import './MouseWindow.css'

const MouseWindow = ({ x, y, closeContextMenu, indicTitle, indicImg }) => {

  const [awardState, dispatch] = useContext(AwardContext)

  const contextMenuRef = useRef(null)
  useOnClickOutside(contextMenuRef, closeContextMenu)


  const createIndicate = (e, catId) => {
    e.preventDefault()
    dispatch({ type: "NewIndic", payload: { catId, indicTitle, indicImg } })
    closeContextMenu()
  }

  const novoCat = (e) => {
    e.preventDefault()
    dispatch({ type: "NewCat" })
  }

  return (
    <div className='mouse-window-container absolute' style={{ top: `${y}px`, left: `${x}px` }} ref={contextMenuRef}>
      <p>Adicionar ao...</p>
      <ul className="mouse-window-list">
        {awardState && awardState.map((item) => (
          <li key={item.id_cat}>
            <button onClick={(e) => createIndicate(e, item.id_cat)}>{item.nome_da_categoria || "Sem nome..."}</button>
          </li>
        ))}

      </ul>
      <button className='mouse-window-novo-btn' onClick={(e) => novoCat(e)}>+ Novo...</button>

    </div>
  )
}

export default MouseWindow