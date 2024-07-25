import { FaChevronUp, FaChevronDown, FaTrashAlt} from 'react-icons/fa';
import { FaGear } from "react-icons/fa6";

import { useContext, useState } from 'react'
import { AwardContext } from '../context/AwardContext'

import { Link } from 'react-router-dom'


import './CategoryLabel.css'

const CategoryLabel = ({ meuId, meuNome, meusIndicados }) => {

    const [awardState, dispatch] = useContext(AwardContext)
    const [nomeCat, setNomeCat] = useState(meuNome)
    const [qntIndicados, setQntIndicados] = useState(meusIndicados)

    const mudarNome = (changedTitle) => {
        dispatch({ type: "UpdateCatName", payload: { meuId, changedTitle } })
    }

    const deleteClick = (e) => {
        e.preventDefault()
        dispatch({ type: "RemoveCat", payload: meuId })
    }

    const subirOrder = (e) => {
        e.preventDefault()
        dispatch({ type: "SubirOrder", payload: meuId })
    }

    const descerOrder = (e) => {
        e.preventDefault()
        dispatch({ type: "DescerOrder", payload: meuId })
    }

    const showConsole = () => {
        console.log(awardState)
    }




    return (
        <div className='stripe'>
            <div className='cat-title'>
                <input type="text" placeholder='Nome da Categoria...'
                    onChange={(e) => setNomeCat(e.target.value)}
                    onBlur={(e) => mudarNome(e.target.value)} value={nomeCat}
                    onFocus={showConsole} />

                <h3>{qntIndicados}</h3>
            </div>

            <div className="cat-move">
                <button className='btn-up' onClick={(e) => subirOrder(e)}>
                    <FaChevronUp />
                </button>
                <button className='btn-down' onClick={(e) => descerOrder(e)}>
                    <FaChevronDown />
                </button>

            </div>

            <div className='cat-edit'>

                <Link to={`/criar-anime-awards/votes/${meuId}`} className='link-edit'>
                    <button className='btn-edit'><FaGear /></button>
                </Link>

                <button className='btn-delete' onClick={(e) => deleteClick(e)}>
                    <FaTrashAlt />
                </button>
            </div>

        </div>
    )
}

export default CategoryLabel