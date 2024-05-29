import React from 'react'
import { useState } from 'react'
import MouseWindow from './MouseWindow'

import './AnimeFicha.css'


const initialContextMenu = {
  show: false,
  x: 0,
  y: 0,
}

const AnimeFicha = ({ img, jap, ing }) => {

  const [constextMenu, setContextMenu] = useState(initialContextMenu)


  const handleClick = (txt, e) => {
    e.preventDefault()

    const { pageX, pageY } = e
    setContextMenu({ show: true, x: pageX, y: pageY, indicTitle: txt, indicImg: img })
    console.log(txt)
  }

  const contextMenuClose = () => {
    setContextMenu(initialContextMenu)
  }

  return (
    <div className='ficha'>

      {constextMenu.show && <MouseWindow x={constextMenu.x} y={constextMenu.y} closeContextMenu={contextMenuClose} indicTitle={constextMenu.indicTitle} indicImg={constextMenu.indicImg} />}


      <div className="img-container">
        <img src={img} />
      </div>
      <div className="nomes-container">

        <button className="jap-title-box" onClick={(e) => handleClick(jap, e)}>
          <h3>{jap}</h3>
        </button>

        <button className="ing-title-box" onClick={(e) => handleClick(ing, e)}>
          <h3>{ing}</h3>
        </button>

      </div>

    </div>
  )
}

export default AnimeFicha