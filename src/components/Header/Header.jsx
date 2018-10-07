import React from 'react'
import {Layout} from 'antd'
import {connect} from "react-redux";
import {Row, Col, Button, Icon, Input} from "antd";

import './Header.css'
const {Header} = Layout
const {Search} = Input

class CommonHeader extends React.Component {
    render() {
        return (
            <Header style={{ position: 'fixed', zIndex: 100, width: '100%' }}>
                <Row>
                    <Col sm={2} />
                    <Col sm={20} >
                        <div className="logo">
                            <span>Flickr</span>
                        </div>
                        <div className="tool">
                            <Icon type="cloud-upload" theme="outlined" style={{color:'white'}} />
                            <Button>Đăng nhập</Button>
                            <Button type="primary">Đăng ký</Button>
                        </div>
                        <div className="search">
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                        </div>
                    </Col>
                    <Col sm={2} />
                </Row>
            </Header>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, {})(CommonHeader)