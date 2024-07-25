import { createContext, useReducer } from "react";


const initialState = [];


const awardReducer = (state, action) => {


    switch (action.type) {
        case 'NewCat':
            return [...state, {
                id_cat: Date.now(),
                nome_da_categoria: "",
                indicados: []
            }];

        case 'LoadCats':
            let newCats = action.payload

            newCats.map((itemNewCats, indexCats) => {
                state.map((itemState) => {
                    itemNewCats.id_cat === itemState.id_cat && newCats.splice(indexCats, 1)
                })
            })

            return [...state, ...newCats]




        case 'UpdateCatName':
            const { meuId, changedTitle } = action.payload
            state.map((item) => {
                item.id_cat === meuId ? item.nome_da_categoria = changedTitle : item.nome_da_categoria = item.nome_da_categoria;
            })
            return [...state];



        case 'RemoveCat':
            const newState = state.filter((item) => item.id_cat !== action.payload)
            return [...newState]



        case 'SubirOrder':
            const indexClicado = state.findIndex((item) => item.id_cat === action.payload)
            const indexCima = indexClicado - 1

            if (indexClicado < 1) { return state }
            else {
                const tempObj = state[indexClicado]
                const segState = [...state]

                segState[indexClicado] = segState[indexCima]
                segState[indexCima] = tempObj

                return [...segState]
            }



        case 'DescerOrder':
            const indClicado = state.findIndex((item) => item.id_cat === action.payload)
            const indBaixo = indClicado + 1

            if (indClicado >= state.length - 1) { return state }
            else {
                const tempObj = state[indClicado]
                const terState = [...state]

                terState[indClicado] = terState[indBaixo]
                terState[indBaixo] = tempObj

                return [...terState]
            }


        case 'NewIndic':
            const { catId, indicTitle, indicImg } = action.payload
            const newIndic = {
                id_indic: Date.now() - 1000000000000,
                nome_indic: indicTitle,
                img_indic: indicImg,
                desc_indic: "",
                votos: 0,
            }
            const indexCat = state.findIndex((item) => item.id_cat === catId)
            const existTeste = state[indexCat].indicados.filter((item) => item.id_indic === newIndic.id_indic)
            if (existTeste.length < 1) {
                state[indexCat].indicados.push(newIndic)
            }
            return state








        case 'RemoveIndic':
            const { idCatRemov, idIndicRemov } = action.payload
            state.map((item) => {
                if (item.id_cat !== idCatRemov) {
                    return state
                } else {
                    const newIndicates = item.indicados.filter((itemInd) => itemInd.id_indic !== idIndicRemov)
                    item.indicados = [...newIndicates]
                    console.log("removeu")
                    return state
                }
            })


        case 'MenosVote':
            const { idCatMenos, idIndicMenos } = action.payload
            state.map((item) => {
                if (item.id_cat !== idCatMenos) {
                    return state
                } else {
                    item.indicados.map((itemInd) => {
                        itemInd.id_indic === idIndicMenos ? (itemInd.votos = itemInd.votos - 1) : itemInd.votos = itemInd.votos
                    })
                }
            })
            return [...state]


        case 'MaisVote':
            const { idCatMais, idIndicMais } = action.payload
            state.map((item) => {
                if (item.id_cat !== idCatMais) {
                    return state
                } else {
                    item.indicados.map((itemInd) => {
                        itemInd.id_indic === idIndicMais ? (itemInd.votos = itemInd.votos + 1) : itemInd.votos = itemInd.votos
                    })
                }
            })
            return [...state]

        case 'UpdateDesc':
            const { idCatDesc, idIndicDesc, changedDesc } = action.payload
            state.map((item) => {
                if (item.id_cat !== idCatDesc) {
                    return state
                } else {
                    item.indicados.map((itemInd) => {
                        itemInd.id_indic === idIndicDesc ? (itemInd.desc_indic = changedDesc) : itemInd.desc_indic = itemInd.desc_indic
                    })
                }
            })
            return [...state]


        default:
            return state;
    }
}


export const AwardContext = createContext()

export const AwardContextProvider = ({ children }) => {
    const value = useReducer(awardReducer, initialState)

    return (
        <AwardContext.Provider value={value}>
            {children}
        </AwardContext.Provider>
    )

}

// ESTRUTURA DO award
// {
//  id_cat: ,
//  nome_da_categoria: "",
//  indicados: []
// },

//   {
//      nome do anime
//      imagem grande
//      votos
//      descrição
//   },
