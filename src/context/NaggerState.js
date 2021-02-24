import { useReducer } from 'react'
import { } from './type'
import NaggerContext from './NaggerContext'
import NaggerReducer from './NaggerReducer'

const NaggerState = props => {
    const initialState = {
        isModalOpen: false
    }

    const [state, dispatch] = useReducer(NaggerReducer, initialState)

    //functions

    return (
        <NaggerContext.Provider value={ {
            isModalOpen: state.isModalOpen
        }}>
            {props.children}
        </NaggerContext.Provider>
    )
}

export default NaggerState;