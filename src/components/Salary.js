import React, { Component } from "react";
import { STAFFS } from "../shared/staff";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";
class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: STAFFS,
    };
  }
  render() {
    console.log("staff", this.state.staff);
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/staffs">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          {this.state.staff.map((x) => (
            <div className="col-12 col-md-6 col-lg-4">
              <Card className="mt-3 mb-3" className="img-responsive">
                <CardTitle>{x.Name}</CardTitle>
                <CardBody>
                  <p>Mã nhân viên:{x.Id}</p>
                  <p>Bộ phận:{x.Heso}</p>
                  <p>Lương:{x.Salary}</p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Salary;
