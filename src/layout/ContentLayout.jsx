import React from 'react'
import {connect} from 'react-redux'
import {Row, Col} from "antd";
import TopBar from "../components/TopBar/TopBar";

class ContentLayout extends React.Component {
    render() {
        return (
            <div>
                <TopBar active={this.props.menuActive}/>
                <Row style={{padding: '0 50px', marginTop: 130}}>
                    <Col span={2}></Col>
                    <Col span={20}>
                        {this.props.children}
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(ContentLayout)