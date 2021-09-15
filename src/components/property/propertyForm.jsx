import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../fire";

const PropertyForm = (props) => {
  // var [values, setValues] = useState([]);

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
    office: "",
  };
  const [values, setValues] = useState(initialFieldValues);
  values.office = office;

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

  const fetchTable = async () => {
    await db
      .collection("students")
      .where("office", "==", office)
      .get()
      .then((snapshot) => {
        let v = [];
        snapshot.forEach((doc) => {
          console.log(doc.data());
          v.push(doc.data());
        });
        setValues(v);
      });
  };

  useEffect(() => {
    fetchTable();
  }, []);

  return (
    <>
      <h1>{props.listNo + " studends pending"}</h1>
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
          <div className="form-group input-group col-md-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i class="far fa-id-card"></i>
              </div>
            </div>

            <input
              className="form-control"
              placeholder="ID"
              name="id"
              value={values.id}
              onChange={handleInputChange}
            />
          </div>
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
            <select
              name="department"
              value={values.department}
              onChange={handleInputChange}
              className="btn btn-light dropdown-toggle"
              defaultValue="none"
              style={{ border: "solid #ced4da61" }}
              // id="dropdownMenuButton"
              // data-toggle="dropdown"
              // aria-haspopup="true"
              // aria-expanded="false"
              // data-bs-toggle="dropdown"
            >
              <option name="department" value="Arc">
                College of Architecture and Civil Engineering
              </option>
              <option name="department" value="Bio">
                College Biological and Chemical Engineering
              </option>
              <option name="department" value="Ele">
                College of Electrical and Mechanical Engineering
              </option>
              <option name="department" value="Soc">
                College of Social and Natural Science
              </option>
              <option name="department" value="Applied">
                College of Applied Science
              </option>
            </select>
          </div>
        </div>
        <span></span>

        <div className="form-row">
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope"></i>
              </div>
            </div>

            <input
              className="form-control"
              placeholder="property"
              name="property"
              value={values.property}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value={props.currentId == "" ? "save" : "Edit"}
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </>
  );
};
export default PropertyForm;
