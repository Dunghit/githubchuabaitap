import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import Footer from "./Footer";
import Menu from "./Menu";
import Department from "./Department";
import Salary from "./Salary";
import { Route, Switch, withRouter } from "react-router-dom";
import StaffDetail from "./StaffDetail";
import { STAFFS } from "../shared/staff";
class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route path="/staffs" component={() => <Main />} /> 
          <Route path="/department" component={Department} />
          <Route path="/salary" component={Salary} />
          <Route path="/staff/:staffId" component={StaffDetail} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);
