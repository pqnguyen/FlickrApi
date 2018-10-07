import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {listTrendingDetailImage, refreshTrendingDetailImage} from './trendingDetailAction'
import ImageCard from '../../components/ImageCard/ImageCard'
import InfiniteScroll from 'react-infinite-scroller';
import {Icon} from "antd";
import ContentLayout from '../../layout/ContentLayout'

class TrendingDetail extends React.Component {
    componentWillMount() {
        this.props.refreshTrendingDetailImage()
    }

    loadImage(page) {
        const {tagName} = this.props.match.params
        this.props.listTrendingDetailImage(tagName, page)
    }

    getImageFromlist(imageList) {
        imageList.sort((a, b) => {
            if (a.width > b.width) return 1
            return -1
        })
        return imageList[Math.floor(imageList.length / 3) + 1]
    }

    render() {
        const photos = this.props.recentlyTagged.map((photo, index) => {
            const image = this.getImageFromlist(photo.sizes)
            const {favesCount, commentsCount} = photo.stats
            const title = photo.title
            const owner = photo.owner.name
            return (
                <Link to={`/photo/${photo.id}`}>
                    <ImageCard key={index} src={image.location} title={title} attribution={owner} star={favesCount}
                               comment={commentsCount}/>
                </Link>
            )
        })

        const loader = <Icon key={0} type="loading" theme="outlined"
                             style={{color: 'blue', fontSize: '35px', display: 'block'}}/>

        return (
            <ContentLayout menuActive='2'>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={(page) => this.loadImage(page)}
                    hasMore={true || false}
                    loader={loader}
                >
                    {photos}
                </InfiniteScroll>
            </ContentLayout>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        recentlyTagged: state.trendingDetail.recentlyTagged
    }
}

export default connect(mapStateToProps, {listTrendingDetailImage, refreshTrendingDetailImage})(TrendingDetail)