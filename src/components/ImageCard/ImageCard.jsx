import React from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'

import './ImageCard.css'

class ImageCard extends React.Component {
    render() {
        const {src, title, attribution, star, comment} = this.props
        return (
            <div className='image-card-block'>
                <img className='image-card-image' src={src} alt=""/>
                <div className='image-card-interaction-bar'>
                    <div className='text'>
                        <span className='title'>{title}</span>
                        <span className='attribution'>{attribution}</span>
                    </div>

                    <div className='engagement'>
                        <span className='engagement-item'>
                            <span className='engagement-icon fave'>
                                <Icon type="star" theme="outlined" />
                            </span>
                            <span className='engagement-count'>{star}</span>
                        </span>

                        <span className='engagement-item comment'>
                            <span className='engagement-icon'>
                                <Icon type="message" theme="outlined" />
                            </span>
                            <span className='engagement-count'>{comment}</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(ImageCard)