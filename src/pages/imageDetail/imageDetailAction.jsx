import imageDetailAction from '../../redux/actionType/imageDetailActionType'
import {apiKey} from '../../config/apiConfig'
import axios from 'axios'

export function getImageDetail(photoId) {
    return async dispatch => {
        const url = `https://api.flickr.com/services/rest?datecreate=1&extras=sizes%2Cicon_urls%2Cignored%2Crev_ignored%2Crev_contacts%2Cvenue%2Cdatecreate%2Ccan_addmeta%2Ccan_comment%2Ccan_download%2Ccan_share%2Ccontact%2Ccount_comments%2Ccount_faves%2Ccount_views%2Cdate_taken%2Cdate_upload%2Cdescription%2Cicon_urls_deep%2Cisfavorite%2Cispro%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cowner_datecreate%2Cpath_alias%2Crealname%2Crotation%2Csafety_level%2Csecret_k%2Csecret_h%2Curl_c%2Curl_f%2Curl_h%2Curl_k%2Curl_l%2Curl_m%2Curl_n%2Curl_o%2Curl_q%2Curl_s%2Curl_sq%2Curl_t%2Curl_z%2Cvisibility%2Cvisibility_source%2Co_dims%2Cpubliceditability%2Cstatic_maps&photo_id=${photoId}&static_map_zoom=3%2C6%2C14&static_map_width=245&static_map_height=100&viewerNSID=&method=flickr.photos.getInfo&csrf=&api_key=${apiKey}&format=json&hermes=1&hermesClient=1&reqId=feaaa9c5&nojsoncallback=1`
        const response = await axios.get(url)

        dispatch({
            type: imageDetailAction.FETCH_IMAGE_DETAIL,
            payload: response.data
        })
    }
}