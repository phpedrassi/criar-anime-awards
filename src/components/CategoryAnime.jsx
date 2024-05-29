import React from 'react'

import { useState, useContext } from 'react'
import { AwardContext } from '../context/AwardContext'


import './CategoryAnime.css'

const CategoryAnime = ({ idIndic, nome_indic, img_indic, votos, desc_indic, idCat }) => {
    const [awardState, dispatch] = useContext(AwardContext)
    const [linhas, setLinhas] = useState(1)
    const [showHide, setShowHide] = useState("hide")

    const mostrarBotoes = (e, mostra) => {
        e.preventDefault()
        setShowHide(mostra)
    }

    const tamanhoTextArea = (e, tam) => {
        e.preventDefault()
        setLinhas(tam)
    }

    const removeIndicate = (e) => {
        e.preventDefault()
        const idCatRemov = Number(idCat)
        const idIndicRemov = idIndic
        dispatch({ type: 'RemoveIndic', payload: { idCatRemov, idIndicRemov } })
    }

    const menosVote = (e) => {
        e.preventDefault()
        const idCatMenos = Number(idCat)
        const idIndicMenos = idIndic
        dispatch({ type: 'MenosVote', payload: { idCatMenos, idIndicMenos } })
    }

    const maisVote = (e) => {
        e.preventDefault()
        const idCatMais = Number(idCat)
        const idIndicMais = idIndic
        dispatch({ type: 'MaisVote', payload: { idCatMais, idIndicMais } })
    }

    const mudarDesc = (changedDesc) => {
        const idCatDesc = Number(idCat)
        const idIndicDesc = idIndic
        dispatch({ type: 'UpdateDesc', payload: { idCatDesc, idIndicDesc, changedDesc } })
    }


    return (
        <div className='cat-anime-ficha' >
            <div className="cat-anime-ficha-title">
                <h4>{nome_indic}</h4>
            </div>

            <div className="cat-anime-img" onMouseEnter={(e) => mostrarBotoes(e, "")} onMouseLeave={(e) => mostrarBotoes(e, "hide")}>
                <img src={img_indic} />
                <div className={`cat-anime-votes ${showHide}`} >
                    <button className="remove-indicate-btn" onClick={(e) => removeIndicate(e)}>X</button>
                    <div className="dark-screen">

                        <p>VOTOS</p>
                        <p className='votes-number'>{votos}</p>
                        <div className="vote-btns">
                            <button className='vote-menos' onClick={(e) => menosVote(e)}>-</button>
                            <button className='vote-mais' onClick={(e) => maisVote(e)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cat-anime-desc">
                <textarea name="description" placeholder='Descrição...' rows={linhas} onFocus={(e) => tamanhoTextArea(e, 4)} onBlur={(e) => tamanhoTextArea(e, 1)} onChange={(e) => mudarDesc(e.target.value)} value={desc_indic}></textarea>
            </div>

        </div>
    )
}

export default CategoryAnime