import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { STAFFS } from "../shared/staff";
import ContactComponent from "./ContactComponent";
import { DEPARTMENTS } from "../shared/staff";
import Formuncontrol from "./Formuncontrol";
import { connect } from "react-redux";
class Main extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.staff);
    this.state = {
      staff: props.list,
      department: DEPARTMENTS,
      staffselected: null,
    };
  }

  handleSearch = (value) => {
    console.log(value);
    const abc = this.state.staff.filter(
      (s) => s.Name.toLowerCase().indexOf(value) > -1
    );
    console.log(abc);
    this.setState({
      staff: abc,
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Nhân viên</h1>
        <div className="row">
          <ContactComponent
            onAdd={(item) => {
              item.Id = this.state.staff.length;
              console.log(item);
              this.setState({ staff: [...this.state.staff, item] });
              STAFFS.push(item);
            }}
          />
          <Formuncontrol getValue={(v) => this.handleSearch(v)} />
        </div>
        <div className="row">
          {this.state.staff.map((staff) => {
            return (
              <div
                key={staff.Name}
                className="col-12 col-md-4 col-lg-4 col-xl-2"
              >
                <Link to={`/staff/${staff.Id}`}>
                  <img
                    src={process.env.PUBLIC_URL + staff.Image}
                    className="img-fluid"
                  />
                  <div className="Name">
                    <h4>{staff.Name}</h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state);
  return {
    list: state.Reducer.staff,
  };
};
export default connect(mapStatetoProps, null)(Main);
