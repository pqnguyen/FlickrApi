import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import './TrendingThumbnail.css'

class TrendingThumbnail extends React.Component {
    render() {
        const {tagName, imageUrl} = this.props
        return (
            <Link to={`tags/${tagName}`}>
                <div className='trending-thumbnail-block'>
                    <img className='trending-thumbnail-image' src={imageUrl}/>
                    <div className="trending-thumbnail-overlay">
                        <div className="trending-thumbnail-tag">{tagName}</div>
                    </div>
                </div>
            </Link>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(TrendingThumbnail)