import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../fire";

function QueueList() {
  const {
    userData: { office, department, to },
  } = useAuth();
  var [values, setValues] = useState([]);

  const fetchTable = async () => {
    await db
      .collection("students")
      .where("to", "==", office)
      .get()
      .then((snapshot) => {
        let v = [];
        snapshot.docs.forEach((doc) => {
          v.push(doc.data());
        });
        setValues(v);
      });
  };

  useEffect(() => {
    fetchTable();
  }, []);

  console.log(department);
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  console.log(to);
  console.log(office);
  console.log(values);

  return (
    <div className="queue_list">
      <FontAwesomeIcon icon={faHome} />

      <div className="jumbotron jumbotron-fluid">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h1 className="display-4 text-center">Queue List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-7" style={{ width: "100%", padding: "50px" }}>
          <table className="table table-sm table-hover">
            <thead className="thead-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Moble</th>
                <th>Department</th>
                <th>Year</th>

                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {values.map((value) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.fname + value.mname}</td>

                    <td>{value.email}</td>
                    <td>{value.mobile}</td>
                    <td>{value.department}</td>
                    <td>{value.year}</td>

                    <td>
                      {value.status}
                      <a
                        className="btn text-primary"
                        onClick={() => handleClick(value.to)}
                      >
                        <i className="fas fa-check-circle"></i>
                      </a>
                      <a className="btn text-primary" onClick={handleClick}>
                        <i className="far fa-times-circle" color="red"></i>
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
}

export default QueueList;
