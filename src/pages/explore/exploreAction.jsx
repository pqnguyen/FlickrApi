import exploreAction from '../../redux/actionType/exploreActionType'
import {apiKey} from '../../config/apiConfig'
import axios from 'axios'

function extractResponse(response) {
    return {
        page: response.page,
        perpage: response.perpage,
        photo: response.photo
    }
}

export function listImage(page, perpage) {
    return async dispatch => {
        const url = `https://api.flickr.com/services/rest?extras=can_comment%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_c%2Curl_l%2Curl_m%2Curl_n%2Curl_q%2Curl_s%2Curl_sq%2Curl_t%2Curl_z&per_page=${perpage}&page=${page}&date=2018-09-28&viewerNSID=&method=flickr.interestingness.getList&csrf=&api_key=${apiKey}&format=json&hermes=1&hermesClient=1&reqId=45800963&nojsoncallback=1`
        const response = await axios.get(url)
        dispatch({
            type: exploreAction.FETCH_IMAGE,
            payload: extractResponse(response.data.photos)
        })
    }
}