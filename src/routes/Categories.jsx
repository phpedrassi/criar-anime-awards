import React from 'react'
import { useContext } from 'react'
import { AwardContext } from '../context/AwardContext'

import './Categories.css'
import CategoryLabel from '../components/CategoryLabel'




const Home = () => {

  const [awardState, dispatch] = useContext(AwardContext)


  const handleClick = () => {

    dispatch({ type: 'NewCat' })
  }


  return (
    <div className='home-container'>
      <div className='home-head'>
        <h2>Categorias</h2>

      </div>

      <ul className="categories-container">
        {awardState && awardState.map((item) => (
          <li key={item.id_cat}>
            <CategoryLabel meuId={item.id_cat} meuNome={item.nome_da_categoria} meusIndicados={item.indicados.length} />
          </li>
        ))}
      </ul>

      <button className='btn-cat-novo' onClick={handleClick}>
        <span className='plus'>+</span> Novo...
      </button>

    </div>
  )
}

export default Home