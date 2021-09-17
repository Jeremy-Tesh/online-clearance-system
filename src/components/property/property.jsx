import React, { useState, useEffect } from "react";
import PropertyForm from "./propertyForm";
import firebaseDb, { db } from "../../fire";
import "./Style.css";
import { useAuth } from "../../contexts/AuthContext";

const Property = () => {
  const [propertyData, setpropertyData] = useState({});
  const [allPropertyData, setAllPropertyData] = useState({});
  const [listNo, setlistNo] = useState(0);

  var [currentId, setCurrentId] = useState("");
  const {
    userData: { office },
  } = useAuth();

  async function fetchData() {
    firebaseDb
      .child("property-info")
      .orderByChild("office")
      .equalTo(office)
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setpropertyData({
            ...snapshot.val(),
          });
          setAllPropertyData({
            ...snapshot.val(),
          });

          setlistNo(snapshot.numChildren());
        } else {
          setAllPropertyData({});
          setpropertyData({});
        }
      });
  }

  useEffect(() => {
    fetchData();
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

  const handleSearch = (e) => {
    e.preventDefault();

    const obj = Object.values(propertyData).filter((o) =>
      o.email.includes(e.target.value)
    );
    setAllPropertyData(obj);
  };

  return (
    <div className="manage-property">
      <h1>{office}</h1>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Manage property</h1>
        </div>
      </div>
      <div className="row">
        <div
          style={{
            background: "",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: "4px",
          }}
        >
          {" "}
          <form className="form-inline" onSubmit={handleSearch}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search using Id"
              aria-label="Search"
              onChange={handleSearch}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-md-5">
          <PropertyForm {...{ addOrEdit, currentId, propertyData, listNo }} />
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
              {Object.keys(allPropertyData).map((id) => {
                return (
                  <tr>
                    <td>{allPropertyData[id].id}</td>
                    <td>{allPropertyData[id].fullName}</td>

                    <td>{allPropertyData[id].email}</td>
                    <td>{allPropertyData[id].mobile}</td>
                    <td>{allPropertyData[id].department}</td>
                    <td>{allPropertyData[id].year}</td>
                    <td>{allPropertyData[id].property}</td>
                    <td>{allPropertyData[id].amount}</td>
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
