import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../fire";

function QueueList() {
  const [search, setSearch] = useState([]);
  const {
    userData: { office },
  } = useAuth();
  var [values, setValues] = useState([]);
  const [key, setKey] = useState();
  console.log(office);
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

  const obj = { department: "library", library: "sport", sport: "dorm" };

  const handleClick = async (student) => {
    // upadte using student.id
    // fetchTabel()
    try {
      let docId;
      await db
        .collection("students")
        .get()
        .then((q) => {
          // console.log("docs", q.docs);
          q.docs.forEach((item) => {
            console.log("item data", item.data().office);
            console.log("student email", student.email);
            if (item.data().email === student.email) {
              console.log("found ", item.id);
              console.log("last data", item.data().office);
              docId = item.id;
            }
          });
        });

      await db
        .collection("students")
        .doc(docId)
        .update({ office: obj[student.office] })
        .then(() => {
          console.log("Document successfully written!");
          fetchTable();
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      // .where("email", "==", value.email);
      // console.log("student ", student);
    } catch (error) {}
    console.log("clicked");
    console.log(values.office);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    let obj = values.find((o) => o.email === search);
    if (obj) console.log("found");
    else console.log("not found");
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
      <div className="row" style={{ width: "100%", padding: "50px 50px" }}>
        <div className="col-md-5"></div>
        <div
          style={{
            background: "",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {" "}
          <form className="form-inline" onSubmit={handleSearch}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-md-7" style={{ width: "100%" }}>
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
                      <span></span>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleClick(value)}
                      >
                        Approve
                      </button>
                      <span></span>
                      {/* <a className="btn text-primary">
                        <i className="fas fa-check-circle"></i>
                      </a> */}
                      <button
                        type="button"
                        className="btn btn-danger btn-group-sm"
                        // onClick={() => handleDecline(value)}
                      >
                        Decline
                      </button>
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
