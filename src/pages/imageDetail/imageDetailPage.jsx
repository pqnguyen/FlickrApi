import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {getImageDetail} from './imageDetailAction'
import ImageDetail from '../../components/ImageDetail/ImageDetail'
import {Tag} from 'antd';

import './imageDetailStyle.css'

class ImageDetailPage extends React.Component {
    componentWillMount() {
        const {photoId} = this.props.match.params
        this.props.getImageDetail(photoId)
    }

    interaction = (count, label) => {
        return (
            <div className="view-count"><span className="view-count-label">{count}</span>
                <span className="stats-label">{label}</span>
            </div>
        )
    }

    social = (views, count_faves, comments) => {
        return (
            <div className="view sub-photo-right-stats-view">
                {this.interaction(views, 'views')}
                {this.interaction(count_faves, 'faves')}
                {this.interaction(comments, 'comments')}
            </div>
        )
    }

    imageInfo = (ownerName, title, description, iconUrl) => {
        return (
            <div className="view attribution-view clear-float photo-attribution">
                <div className="avatar" tabIndex="0">
                    <img src={iconUrl}/>
                </div>

                <div className="attribution-info">
                    <span className="owner-name">{ownerName}</span>
                    <br/>
                    <span className="title">{title}</span>
                    <br/>
                    <span className="description">{description}</span>
                </div>
            </div>
        )
    }

    getImageFromlist(imageList) {
        imageList.sort((a, b) => {
            if (a.width > b.width) return 1
            return -1
        })
        return imageList[imageList.length - 1]
    }

    render() {
        const isFetched = this.props.imageDetail.photo != undefined
        const tagList = this.props.imageDetail.photo && this.props.imageDetail.photo.tags.tag
        const tags = tagList && tagList.map((tag, index) => {
            return (<Tag key={index}><Link to={`tags/${tag.raw}`}>{tag.raw}</Link></Tag>)
        })

        const {count_faves, views, comments} = isFetched && this.props.imageDetail.photo
        const {description, owner, title} = isFetched && this.props.imageDetail.photo
        const image = isFetched && this.getImageFromlist(this.props.imageDetail.photo.sizes.size)

        return (
            <div className='main-image-detail'>
                <ImageDetail url={image.source}/>
                <table className='image-content'>
                    <tbody>
                    <tr>
                        <td className='image-content-col'>
                            {isFetched && this.imageInfo(owner.realname, title._content, description._content, owner.iconurls.medium)}
                        </td>
                        <td className='image-content-col'>
                            {isFetched && this.social(views, count_faves, comments._content)}
                            <hr/>
                            <div className='image-tags'>
                                {tags}
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        imageDetail: state.imageDetail.imageDetail
    }
}

export default connect(mapStateToProps, {getImageDetail})(ImageDetailPage)