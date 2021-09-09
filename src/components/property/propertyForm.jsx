import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const PropertyForm = (props) => {
  const {
    userData: { office },
  } = useAuth();
  const initialFieldValues = {
    id: "",
    fullName: "",
    mobile: "",
    email: "",
    department: "",
    year: "",
    property: "",
    amount: "",
    office: office,
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
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-bs-toggle="dropdown"
          >
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
      <div className="form-group input-group col-md-6">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-envelope"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Property"
          name="property"
          value={values.property}
          onChange={handleInputChange}
        />
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
