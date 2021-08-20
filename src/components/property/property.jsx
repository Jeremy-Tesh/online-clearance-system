import React, { useState, useEffect } from "react";
import PropertyForm from "./propertyForm";
import firebaseDb from "../../fire";
import "./Style.css";

const Property = () => {
  var [propertyData, setpropertyData] = useState({});
  var [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("property-info").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setpropertyData({
          ...snapshot.val(),
        });
      else setpropertyData({});
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "") {
      firebaseDb.child("property-info").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    } else {
      firebaseDb.child(`property-info/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };
  const onDelete = (key) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      firebaseDb.child(`property-info/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <div className="manage-property">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Manage property</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <PropertyForm {...{ addOrEdit, currentId, propertyData }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Moble</th>
                <th>Department</th>
                <th>Year</th>
                <th>Property</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {console.log(Object.keys)}
              {Object.keys(propertyData).map((id) => {
                return (
                  <tr>
                    <td>{propertyData[id].id}</td>
                    <td>{propertyData[id].fullName}</td>

                    <td>{propertyData[id].email}</td>
                    <td>{propertyData[id].mobile}</td>
                    <td>{propertyData[id].department}</td>
                    <td>{propertyData[id].year}</td>
                    <td>{propertyData[id].property}</td>
                    <td>{propertyData[id].amount}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => onDelete(id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Property;
