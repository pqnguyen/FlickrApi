import React from 'react'
import {connect} from 'react-redux'
import {Layout} from 'antd'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import {Row, Col} from "antd";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ExplorePage from "../pages/explore/explorePage";
import TrendingPage from "../pages/trending/trendingPage";
import TrendingDetailPage from "../pages/trendingDetail/trendingDetailPage";
import ImageDetailPage from "../pages/imageDetail/imageDetailPage";

class Main extends React.Component {
    content = () => {
        return (
            <Router>
                <Switch>
                    <Route path="/explore" component={ExplorePage}/>
                    <Route exact path="/photo/tags/:tagName" component={TrendingDetailPage}/>
                    <Route exact path="/photo/tags" component={TrendingPage}/>
                    <Route path="/photo/:photoId" component={ImageDetailPage}/>
                    <Route path="/" component={ExplorePage}/>
                </Switch>
            </Router>
        )
    }

    render() {
        return (
            <Layout>
                <Header/>
                {this.content()}
                <Footer/>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {})(Main)