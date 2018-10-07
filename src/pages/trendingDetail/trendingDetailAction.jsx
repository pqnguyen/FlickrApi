import trendingDetailAction from '../../redux/actionType/trendingDetailActionType'
import axios from 'axios'

export function listTrendingDetailImage(tagName, page, perpage = 25) {
    return async dispatch => {
        const url = `https://api.flickr.com/v2/media/search?reqId=7149b64a&orderBy=interestingness&query=${tagName}&pageNumber=${page}&pageSize=${perpage}&format=json&nojsoncallback=1&context=tag%3Asunset%20dateUploaded%3A%5B2018-09-06%20TO%202018-10-06%5D`
        const response = await axios.get(url)
        dispatch({
            type: trendingDetailAction.FETCH_RECENTLY_TAGGED,
            payload: response.data
        })
    }
}

export function refreshTrendingDetailImage() {
    return dispatch => {
        dispatch({
            type: trendingDetailAction.REFRESH_LIST
        })
    }
}