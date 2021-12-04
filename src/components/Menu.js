import React, { Component } from "react";
import { FcBusinessman } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from "react-router-dom";
class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Menu">
        <ul>
          <li>
            <Link to="/staffs">
              Nhân viên
              <FcBusinessman />
            </Link>
          </li>
          <li>
            <Link to="/department">
              Phòng ban
              <FcDepartment />
            </Link>
          </li>
          <li>
            <Link to="/salary">
              Bảng lương
              <FcMoneyTransfer />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
