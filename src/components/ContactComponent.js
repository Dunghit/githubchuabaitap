import React, { Component } from "react";
import { FormFeedback } from "reactstrap";
import { DEPARTMENTS } from "../shared/staff";
import { connect } from "react-redux";
import {
  Nav,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import Main from "./Main";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const mapStatetoProps = (state, ownProps) => {
  console.log("state.reducer", state.Reducer.isNavOpen);
  let isnavopent = state.Reducer.isNavOpen;
  let ismodalOpen = state.Reducer.isModalOpen;
  return {
    isnavopent,
    ismodalOpen,
    name: state.Reducer.Fullname,
    birthday: state.Reducer.birthday,
    department: state.Reducer.department,
    onboard: state.Reducer.OnBoard,
    salary: state.Reducer.SaLary,
    dayoff: state.Reducer.dayoff,
    dayot: state.Reducer.dayot,
    touched: state.Reducer.touched,
  };
};
class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isnavopent: props.isModalOpen,
      isModalOpen: false,
      name: props.Fullname,
      birthday: props.birthday,
      department: props.department,
      onboard: props.OnBoard,
      salary: props.SaLary,
      dayoff: props.dayoff,
      dayot: props.dayot,
      touched: props.touched,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleChange(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(values) {
    console.log(values.Salary);
    var salary = Number(values.Salary);

    console.log(salary);

    var department = this.props.department.find(
      (d) => d.id == values.Department
    );
    const item1 = {
      //   Id: this.state.Fullname,
      Name: values.Fullname,
      Birthday: values.Birthday,
      OnBoard: values.OnBoard,
      Department: department,
      Dayoff: values.Dayoff,
      Dayot: values.Dayot,
      Image: "/asset/top6.jpg",
      Salary: salary,
      Heso: values.Heso,
    };
    console.log(salary);
    console.log(item1.Salary);
    console.log(item1);
    this.props.onAdd(item1);
    this.toggleModal();
  }
  render() {
    return (
      <div className="Menu">
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="username" name="Name">
                  Tên
                </Label>
                <Control.text
                  model=".Fullname"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".Fullname"
                  show="touched"
                  messages={{
                    required: "Điền vào form",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Row>
              <Row className="form-group">
                <Label htmlFor="birthday" name="Birthday">
                  Ngày sinh
                </Label>
                <Control.text
                  model=".Birthday"
                  name="Birthday"
                  type="date"
                  className="form-control"
                />
              </Row>
              <Row className="form-group">
                <Label htmlFor="Onboard" name="OnBoard">
                  Ngày vào công ty
                </Label>
                <Control.text
                  model=".OnBoard"
                  type="date"
                  name="OnBoard"
                  className="form-control"
                />
              </Row>
              <Row className="form-group">
                <Label>
                  <Control.select
                    name="Department"
                    model=".Department"
                    className="form-control"
                  >
                    {this.props.department.map((x) => (
                      <option value={x.id}>{x.name}</option>
                    ))}
                  </Control.select>
                </Label>
              </Row>
              <Row className="form-group">
                <Label htmlFor="Heso" name="Heso">
                  Hệ số lương
                </Label>
                <Control.text
                  model=".Heso"
                  name="Heso"
                  type="text"
                  className="form-control"
                />
              </Row>
              <Row className="form-group">
                <Label htmlFor="Salary" name="Salary">
                  Lương
                </Label>
                <Control.text
                  model=".Salary"
                  name="Salary"
                  type="text"
                  className="form-control"
                />
              </Row>

              <Row className="form-group">
                <Label htmlFor="Dayoff" name="Dayoff">
                  Số ngày nghỉ còn lại
                </Label>
                <Control.text
                  type="text"
                  model=".Dayoff"
                  name="Dayoff"
                  className="form-control"
                />
              </Row>
              <Row className="form-group">
                <Label htmlFor="Dayot" name="Dayot">
                  Số ngày làm thêm
                </Label>
                <Control.text
                  type="text"
                  name="Dayot"
                  model=".Dayot"
                  className="form-control"
                />
              </Row>
              <Row className="form-group" check></Row>
              <Button type="submit" value="submit" color="primary">
                Thêm
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Nav className="mr-auto" navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Button onClick={this.toggleModal}>
                <span></span> ADD
              </Button>
            </NavItem>
          </Nav>
        </Nav>
      </div>
    );
  }
}
export default connect(mapStatetoProps, null)(ContactComponent);
