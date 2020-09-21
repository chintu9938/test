import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import Login from './components/login/login'
import successMessage from './components/login/successMessage/success'
import survey from './components/login/survey/survey'
import './App.css';
import { Provider } from "react-redux";
import store from "./store/store";
const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <HashRouter history={hist}>
            <Switch>
            <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/success" component={successMessage}/>
              <Route path="/survey" component={survey}/>
            </Switch>
          </HashRouter>
        </div>
      </Provider>
    );
  }
}

export default App;