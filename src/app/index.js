import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Main} from "./components/Main"
import {Weather} from "./components/Weather";
import {About} from "./components/About";
import {Examples} from "./components/Examples";
import {foundation} from 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Main}>
                    <Route path="about" component={About}/>
                    <Route path="examples" component={Examples}/>
                    <IndexRoute component={Weather}/>
                </Route>
            </Router>
        );
    }
}

render(
    <App/>, window.document.getElementById('app'));
