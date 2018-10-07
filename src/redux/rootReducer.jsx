import {combineReducers} from 'redux'
import counterReducer from '../pages/counter/counterReducer'
import exploreReducer from '../pages/explore/exploreReducer'
import trendingReducer from '../pages/trending/trendingReducer'
import trendingDetailReducer from '../pages/trendingDetail/trendingDetailReducer'
import imageDetailReducer from "../pages/imageDetail/imageDetailReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    explore: exploreReducer,
    trending: trendingReducer,
    trendingDetail: trendingDetailReducer,
    imageDetail: imageDetailReducer
})

export default rootReducer