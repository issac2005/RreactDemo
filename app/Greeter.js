import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Header from './header/header';
import Page from './pageOne';
import Home from './home';

class Greeter extends Component{
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Header></Header>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/page1" component={Page} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Greeter
