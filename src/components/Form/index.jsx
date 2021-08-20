import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      id: "",
      email: "",
      department: "",
    };
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Form>
          <label>Student Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Form>
      </div>
    );
  }
}
export default Form;
