import trendingAction from '../../redux/actionType/trendingActionType'
import axios from 'axios'

export function listMostPopularTrending() {
    return async dispatch => {
        const url = `https://api.flickr.com/v2/tags/trending/2000?reqId=37c802d9&pageNumber=0&pageSize=50&format=json&nojsoncallback=1`
        const response = await axios.get(url)
        dispatch({
            type: trendingAction.FETCH_MOST_POPULAR,
            payload: response.data
        })
    }
}