import trendingAction from '../../redux/actionType/trendingActionType'

const initialState = {
    mostPopularTrending: []
}

function trendingReducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case trendingAction.FETCH_MOST_POPULAR:
            return {
                ...state,
                mostPopularTrending: payload
            }
        default:
            return state
    }
}

export default trendingReducer

