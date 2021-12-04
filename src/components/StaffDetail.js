import React, { Component } from "react";
import { STAFFS } from "../shared/staff";
import { DEPARTMENTS } from "../shared/staff";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Card, CardBody } from "reactstrap";
class StaffDetail extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      staff: STAFFS.filter( //mai xem lại nó có lấy ra được không nhé, có gì hỏi mentor khác :))
        (x) => x.Id === parseInt(props.match.params.staffId, 10)
      )[0],
    };
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/staffs">Nhân viên</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{this.state.staff.Name}</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <Card className="mt3 mb3">
              <img
                src={process.env.PUBLIC_URL + this.state.staff.Image}
                className="img-fluid"
                alt=" "
              />
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Card className="mt-3 mb-4">
              <div className="mt-3 mb-4">
                Tên nhân viên: {this.state.staff.Name}
              </div>
              <div className="mt-3 mb-4">
                Ngày vào công ty: {this.state.staff.OnBoard}
              </div>
              <div className="mt-3 mb-4">
                Bộ phận: {this.state.staff.Department.name}
              </div>
              <div className="mt-3 mb-4">
                Số Ngày nghỉ: {this.state.staff.Dayoff}
              </div>
              <div className="mt-3 mb-4">
                Số Ngày tăng ca: {this.state.staff.Dayot}
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default StaffDetail;
