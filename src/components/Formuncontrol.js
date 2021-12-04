import React, { Component } from "react";
class Formuncontrol extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.input.current.value);
    event.preventDefault();
    this.props.getValue(this.input.current.value);
  }
  render() {
    return (
      // <div className="divsearch">
      //   <input className="search" type="text" ref={this.input} />
      //   <button className="btnsearch" type="submit" onClick={this.handleSubmit}>
      //     Search
      //   </button>
      // </div>
      <div>
        <input
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
          type="text"
          ref={this.input}
        />
        <button
          class="btn btn-danger"
          type="submit"
          onClick={this.handleSubmit}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Formuncontrol;
