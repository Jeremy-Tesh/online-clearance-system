import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { db, firebaseDb } from "../../fire";

function QueueList() {
  const initialFieldValues = {
    id: "",
    fullName: "",
    mobile: "",
    email: "",
    department: "",
    year: "",
  };
  var [values, setValues] = useState(initialFieldValues);
  var [state, setState] = useState("");

  const [table, setTable] = useState([]);
  const fetchTable = async () => {
    db.collection("students")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var data = doc.data();
          setTable((arr) => [...arr, data]);
          console.log(table);
        });
      });
  };
  useEffect(() => {
    fetchTable();
  }, []);

  const handleClick = (id) => {
    console.log(table[id]);
  };

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
              {/* {console.log(table.keys)} */}
              {Object.keys(table).map((id) => {
                return (
                  <tr>
                    <td>{table[id].id}</td>
                    <td>{table[id].fname + table[id].mname}</td>

                    <td>{table[id].email}</td>
                    <td>{table[id].mobile}</td>
                    <td>{table[id].department}</td>
                    <td>{table[id].year}</td>

                    <td>
                      {table[id].status}
                      <a
                        className="btn text-primary"
                        onClick={() => handleClick(id)}
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
