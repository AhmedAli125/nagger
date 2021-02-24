import {
    CLOSE_MODAL,
    OPEN_MODAL
} from './type'

export default (state, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return ({
                ...state,
                isModalOpen: false
            })
        
        case OPEN_MODAL:
            return ({
                ...state,
                isModalOpen: true
            })
        
        default:
            return state
    }
}