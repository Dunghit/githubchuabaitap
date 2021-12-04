import React, { Component } from "react";
import { DEPARTMENTS } from "../shared/staff";
import { Card, CardTitle } from "reactstrap";
class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Department: DEPARTMENTS,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.Department.map((x) => {
            return (
              <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                <Card className="mt-3 mb-3">
                  <CardTitle className="mt-3 mb-5 text-primary">
                    Bộ Phận:{x.name}
                  </CardTitle>
                  <Card>Số lượng nhân viên:{x.numberOfStaff}</Card>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Department;
