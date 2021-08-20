import React, { useState, useEffect } from "react";

const PropertyForm = (props) => {
  const initialFieldValues = {
    id: "",
    fullName: "",
    mobile: "",
    email: "",
    department: "",
    year: "",
  };
  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "") setValues({ ...initialFieldValues });
    else setValues({ ...props.propertyData[props.currentId] });
  }, [props.currentId, props.propertyData]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <option className="dropdown-item">Action</option>
          </li>
          <li>
            <option className="dropdown-item">Another action</option>
          </li>
          <li>
            <option className="dropdown-item">Something else here</option>
          </li>
        </ul>
      </div>

      <div className="form-group">
        <input
          type="submit"
          value={props.currentId == "" ? "save" : "Edit"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};
export default PropertyForm;
