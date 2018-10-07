import React from 'react'
import {connect} from 'react-redux'
import {Icon, Carousel} from 'antd'

import './ImageDetail.css'

class ImageDetail extends React.Component {
    render() {
        return (
            <img className='image-detail' src={this.props.url}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(ImageDetail)