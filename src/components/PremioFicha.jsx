import { useContext, useState, useEffect } from 'react'
import { AwardContext } from '../context/AwardContext'


import './PremioFicha.css'

const PremioFicha = ({ CategoryName, idCat }) => {
    const [awardState, dispatch] = useContext(AwardContext)
    const winner = []
    const maiorVoto = []
    let empate = false


    const minhaCategoria = awardState.filter((itemCat) => itemCat.id_cat === idCat)[0] // categoria deste componente

    const meusIndicados = minhaCategoria.indicados // array dos indicados
    if (meusIndicados.length === 1) {
        winner.push(meusIndicados[0])
        console.log("1 indicado")
    } else {
        console.log("mais de 1 indicado")
        const arrVotos = []
        meusIndicados.map((itemInd) => {
            arrVotos.push(itemInd.votos)
        })
        const votosEmOrdem = arrVotos.sort((a, b) => a - b)
        console.log(votosEmOrdem)


        if (votosEmOrdem[votosEmOrdem.length - 1] === votosEmOrdem[votosEmOrdem.length - 2]) {
            empate = true
            console.log("empatou")
        } else {
            console.log("não empatou")
            maiorVoto.push(votosEmOrdem[votosEmOrdem.length - 1])
            console.log(maiorVoto[0])
            winner.push(meusIndicados.filter((item) => item.votos === maiorVoto[0])[0])

            console.log(winner[0])
        }

    }

    return (
        <div className='vencedor-ficha'>
            <h2>{CategoryName}</h2>
            <div className="v-ficha-pai">
                <div className="v-ficha-dados">
                    <div className="votos-qnt">
                        <p><span>{!empate && winner[0].votos}</span></p>
                        <p>{!empate && "VOTOS"}</p>
                    </div>
                    <p>{!empate && winner[0].desc_indic}</p>
                    <h4>{empate ? "Não aceito empate" : winner[0].nome_indic}</h4>
                    
                </div>
                {!empate && <div className="v-ficha-img">
                    <img src={winner[0].img_indic} />
                </div>}
            </div>

        </div>
    )
}

export default PremioFicha