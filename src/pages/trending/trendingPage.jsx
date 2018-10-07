import React from 'react'
import {connect} from 'react-redux'
import {listMostPopularTrending} from './trendingAction'
import TrendingThumbnail from '../../components/TrendingThumbnail/TrendingThumbnail'
import ContentLayout from '../../layout/ContentLayout'

class Trending extends React.Component {
    componentWillMount() {
        this.props.listMostPopularTrending()
    }

    getImageFromlist(imageList) {
        imageList.sort((a, b) => {
            if (a.width > b.width) return 1
            return -1
        })
        return imageList[Math.floor(imageList.length / 3) + 1]
    }

    render() {
        return (
            <ContentLayout menuActive='2'>
                {
                    this.props.mostPopularTrending.map((trending, index) => {
                        const image = this.getImageFromlist(trending.photoList[0].sizes)
                        return (
                            <span key={index}>
                                <TrendingThumbnail tagName={trending.tagName} imageUrl={image.location}/>
                            </span>
                        )
                    })
                }
            </ContentLayout>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mostPopularTrending: state.trending.mostPopularTrending
    }
}

export default connect(mapStateToProps, {listMostPopularTrending})(Trending)