import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const EmpCreate = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState(true);
  const [dateTime, setDateTime] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const empData = { name, email, phone, active, dateTime };

    axios
      .post("http://localhost:8000/employee", empData)
      .then((res) => {
        alert("Saved successfully.");
        navigate("/employee");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="flex justify-center mt-8">
        <form className="w-1/2" onSubmit={handleSubmit}>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Employee Create</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2">ID</label>
                <input
                  value={id}
                  disabled
                  className="form-input"
                />
              </div>
              <div>
                <label className="block mb-2">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
              <div>
                <label className="block mb-2">Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </div>
              <div>
                <label className="block mb-2">Date and Time</label>
                <input
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="form-input"
                  type="datetime-local"
                />
              </div>
              <div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={active}
                    onChange={(e) => setActive(e.target.checked)}
                  />
                  <label className="ml-2">Is Active</label>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
                <Link
                  to="/employee"
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpCreate;
