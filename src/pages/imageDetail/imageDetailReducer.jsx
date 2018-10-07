import imageDetailAction from '../../redux/actionType/imageDetailActionType'

const initialState = {
    imageDetail: {}
}

function imageDetailReducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case imageDetailAction.FETCH_IMAGE_DETAIL:
            return {
                ...state,
                imageDetail: payload
            }
        default:
            return state
    }
}

export default imageDetailReducer

