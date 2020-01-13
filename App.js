import React from "react";
import {BrowserRouter ,HashRouter,Router, Route, Switch} from "react-router-dom";
import history from './history';
import Home from './Components/Home.js';
import His from './Components/His.js';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {


    render() {
        return (
        
                    <HashRouter>
                                <Route exact strict path="/" component={Home} />
                                <Route exact strict path="/his" component={His} />
                    </HashRouter>
        );
    }
}

export default App;
