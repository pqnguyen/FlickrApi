import exploreAction from '../../redux/actionType/exploreActionType'

const initialState = {
    page: 0,
    perpage: 20,
    photo: []
}

function exploreReducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case exploreAction.FETCH_IMAGE:
            return {
                page: payload.page,
                perpage: payload.perpage,
                photo: [
                    ...state.photo,
                    ...payload.photo
                    ]
            }
        default:
            return state
    }
}

export default exploreReducer

