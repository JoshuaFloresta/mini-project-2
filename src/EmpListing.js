
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
  const [empdata, setEmpData] = useState(null);
  const navigate = useNavigate();

  const loadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };

  const loadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const removeFunction = (id) => {
    if (window.confirm("Are you sure you want to remove")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => res.json())
      .then((resp) => {
        setEmpData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div>
            <Link to="/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Image</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td><img src="" alt="" /></td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button
                        onClick={() => loadEdit(item.id)}
                        className="btn btn-success"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeFunction(item.id)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => loadDetail(item.id)}
                        className="btn btn-primary"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpListing;