import React from 'react'
import { FaSearch } from "react-icons/fa";

const AnimeFiltroSearch = ({handleName}) => {
  let nomeTemp = ""
  return (
    <div className='search-form-div'>
        <form className="search-form" onSubmit={(e) => handleName(e, nomeTemp)}>
            <FaSearch />
            <input type="text" onChange={(e) => nomeTemp = e.target.value} />
          </form>
    </div>
  )
}

export default AnimeFiltroSearch