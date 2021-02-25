import { useReducer } from 'react'
import {
    CLOSE_MODAL,
    OPEN_MODAL
 } from './type'
import NaggerContext from './NaggerContext'
import NaggerReducer from './NaggerReducer'

const NaggerState = props => {
    const initialState = {
        isModalOpen: false,
        reminders: null
    }

    const [state, dispatch] = useReducer(NaggerReducer, initialState)

    //functions

    const closeModal = () => {
        dispatch({type: CLOSE_MODAL})
    }

    const openModal = () => {
        dispatch({type: OPEN_MODAL})
    }


    return (
        <NaggerContext.Provider value={ {
            isModalOpen: state.isModalOpen,
            reminders: state.reminders,
            closeModal,
            openModal
        }}>
            {props.children}
        </NaggerContext.Provider>
    )
}

export default NaggerState;