import React from 'react'
import {Layout} from 'antd'
import {connect} from "react-redux";
import {Row, Col} from "antd";

import './Footer.css'
const {Footer} = Layout

class CommonFooter extends React.Component {
    render() {
        return (
            <Footer>
                <Row>
                    <Col sm={2} />
                    <Col sm={20} >
                        <Footer style={{ textAlign: 'center' }}>
                            pqnguyen Design ©2018 Created by PQNguyen
                        </Footer>
                    </Col>
                    <Col sm={2} />
                </Row>
            </Footer>
        )
    }
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, {})(CommonFooter)