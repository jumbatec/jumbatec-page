import React, { Component } from "react";
import './App.css';
import routes from "./routes";
import withRouter from "./components/withRouter";
import {
  Route,
  Routes
} from "react-router-dom";
import "./i18n";
import { LanguageProvider } from "./LanguageContext";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
    render() {
        return (
        <LanguageProvider>
            <React.Fragment>
            <Routes>
              {routes.map((route, idx) => (
                <Route path={route.path} element={route.component} key={idx} />
              ))}
            </Routes>
        </React.Fragment>
        </LanguageProvider>
      );
    }
  }
  
  export default withRouter(App);