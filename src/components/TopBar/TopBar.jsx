import React from 'react'
import {Layout} from 'antd'
import {connect} from "react-redux";
import {Row, Col, Button, Icon, Input} from "antd";
import {Link} from "react-router-dom";

import './TopBar.css'

class TopBar extends React.Component {
    render() {
        const explore = this.props.active == 1 ? 'active' : ''
        const trending = this.props.active == 2 ? 'active' : ''

        return (
            <Row className='topbar'>
                <Col span={2}></Col>
                <Col span={20}>
                    <div className='menu-bar'>
                        <Link to='/explore'>
                            <div className={`menu-block explore ${explore}`}>
                                Explore
                            </div>
                        </Link>
                        <Link to='/photo/tags'>
                            <div className={`menu-block trending ${trending}`}>
                                Trending
                            </div>
                        </Link>
                    </div>
                </Col>
                <Col span={2}></Col>
            </Row>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, {})(TopBar)