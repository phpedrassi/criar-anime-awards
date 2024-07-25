import React from 'react'
import { FaDownload, FaSave } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AwardContext } from '../context/AwardContext'

import "./Navbar.css"

const Navbar = () => {
  const [awardState, dispatch] = useContext(AwardContext)


  const saveFile = (e) => {
    e.preventDefault()

    let a = document.createElement("a")
    document.body.appendChild(a)
    a.style = "display: none"

    const json = JSON.stringify(awardState)
    const blob = new Blob([json], { type: "octet/stream" })
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = "minhas-categorias.caa"
    a.click()
    window.URL.revokeObjectURL(url)
    a.remove()
  }

  const loadFile = (e) => {
    e.preventDefault()

    const files = e.target.files[0]
    const reader = new FileReader()

    reader.addEventListener('load', () => {
      const loadedFiles = JSON.parse(reader.result)
      dispatch({type: 'LoadCats', payload: loadedFiles})
    }, false,)

    if (files) {
      reader.readAsText(files)
    }

  }





  return (
    <nav className='navbar'>
      <ul className='menu-bar'>
        <li><NavLink end to="/criar-anime-awards" >CATEGORIAS</NavLink></li>
        <li><NavLink to="/criar-anime-awards/animes" >ANIMES</NavLink></li>
        <li><NavLink to="/criar-anime-awards/winner" >VENCEDOR</NavLink></li>
        {/* className={({ isActive }) => (isActive ? "desativado" : "")} */}
      </ul>
      <ul className="file-bar">
        <li className='save-btn' onClick={(e) => saveFile(e)}><FaSave /><span> Salvar</span></li>
        <li><label htmlFor='file-upload' className='custom-file-upload'><FaDownload /><span> Carregar</span></label><input id='file-upload' type='file' accept='.caa' onChange={(e) => loadFile(e)} /></li>
      </ul>
    </nav>
  )
}

export default Navbar