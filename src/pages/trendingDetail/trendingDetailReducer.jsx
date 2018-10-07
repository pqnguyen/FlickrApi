import trendingDetailAction from '../../redux/actionType/trendingDetailActionType'

const initialState = {
    recentlyTagged: []
}

function trendingDetailReducer(state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case trendingDetailAction.FETCH_RECENTLY_TAGGED:
            return {
                ...state,
                recentlyTagged: [
                    ...state.recentlyTagged,
                    ...payload
                ]
            }
        case trendingDetailAction.REFRESH_LIST:
            return initialState
        default:
            return state
    }
}

export default trendingDetailReducer

