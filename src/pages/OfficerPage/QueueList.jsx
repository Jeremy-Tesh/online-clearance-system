import React, { useEffect, useState } from "react";
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
  var [currentId, setCurrentId] = useState("");

    const [table,setTable]=useState([])

  const fetchProfile = async () => {
    const response = db.collection("students");
    const data = await response.get();
    data.docs.forEach((item) => {
      setTable([...table, item.data()]);
    });
  };
  useEffect(() => {
    fetchProfile()
  }, []);
 
   return (
    <div className="queue_list">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Queue List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          {/* <PropertyForm {...{ addOrEdit, currentId, propertyData }} /> */}
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
              
              {Object.keys(table).map((id) => {
                return (
                  <tr>
                    <td>{table[id].id}</td>
                    <td>{table[id].fullName}</td>

                    <td>{table[id].email}</td>
                    <td>{table[id].mobile}</td>
                    <td>{table[id].department}</td>
                    <td>{table[id].year}</td>
                    
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

}

export default QueueList;
