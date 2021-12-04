import { STAFFS, DEPARTMENTS } from "..//../shared/staff";
export const innitialSate = {
  staff: STAFFS,
  department: DEPARTMENTS,
  isNavOpen: false,
  isModalOpen: false,
  Fullname: "",
  BirthDay: "",
  DepartMent: "",
  OnBoard: "",
  SaLary: "",
  Dayoff: "",
  DayOt: "",
  touched: {
    Fullname: false,
    BirthDay: false,
    OnBoard: false,
  },
};
export const Reducer = (state = innitialSate, action) => {
  return state;
};
