import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Header from './header/header';
import Page from './child/pageOne';
import PageTwo from './child/pageTwo';
import PageThree from './child/pageThree';
import Home from './home';

class Index extends Component{
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Header></Header>
                        <div>
                            <Route exact path="/" component={Home} />
                            <Route path="/page1" component={Page} />
                            <Route path="/page2" component={PageTwo} />
                            <Route path="/page3" component={PageThree} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Index;
