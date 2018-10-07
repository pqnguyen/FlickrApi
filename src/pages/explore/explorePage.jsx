import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {listImage} from './exploreAction'
import ImageCard from '../../components/ImageCard/ImageCard'
import InfiniteScroll from 'react-infinite-scroller';
import {Icon} from 'antd'
import ContentLayout from '../../layout/ContentLayout'

class Explore extends React.Component {

    loadImage(page, perpage) {
        this.props.listImage(page, perpage)
    }

    render() {
        const {page, perpage, photo} = this.props

        const photos = photo.map((image, index) => {
            const {url_l, realname, title, count_faves, count_comments} = image
            return (
                <Link key={index} to={`/photo/${image.id}`}>
                    <ImageCard src={url_l} title={title} attribution={realname} star={count_faves}
                               comment={count_comments}/>
                </Link>
            )
        })
        const loader = <Icon key={0} type="loading" theme="outlined"
                             style={{color: 'blue', fontSize: '35px', display: 'block'}}/>
        return (
            <ContentLayout menuActive='1'>
                <InfiniteScroll
                    pageStart={page}
                    loadMore={(page) => this.loadImage(page, perpage)}
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
        page: state.explore.page,
        perpage: state.explore.perpage,
        photo: state.explore.photo
    }
}
export default connect(mapStateToProps, {listImage})(Explore)
