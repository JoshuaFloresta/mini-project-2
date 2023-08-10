import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";


export default function FormElements() {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const images = [image1, image2, image3, image4, image5];
  const [randomImage] = useState(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const empData = {
      name,
      email,
      text,
      date,
      time,
    };

    axios
      .post("https://mp2-crud.onrender.com/schedule", empData)
      .then((res) => {
        alert("Saved successfully.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <button style={{ backgroundColor: '#7936EB', color:'white'}} className="p-2 rounded-xl ms-2 " onClick={() => setOpenModal(true)}>Create Schedule</button>

      {openModal && (
        <div className="modal-overlay " >
          <div className="modal">
            <h1 className="text-3xl font-bold mb-4">Create Schedule</h1>
            <hr className="text-gray-500"/>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                  <div className="flex lg:gap-5"> 
                  <div className="input-group">
                  <label htmlFor="name" className="label">
                    Schedule Name
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input input"
                    required
                  
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email" className="block mb-2 label">
                    Email
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input input"
                  />
                </div>
                  </div>

                <div className="flex flex-wrap md:m-2 lg:ms-5 lg:gap-16">
                 <div className="input-group ">
                 <div className="w-full ">
                    <label htmlFor="date" className="block mb-2 label">
                      Date
                    </label>
                    <input
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="form-input input"
                      type="date"
                      required
                    />
                  </div>
                 </div>
                  <div className="input-group">
                  <div className="w-full">
                    <label htmlFor="time" className="block mb-2 label">
                      Time
                    </label>
                    <input
                      id="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="form-input input"
                      type="time"
                      required
                    />
                  </div>
                  </div>
                </div>

                <div className="mx-auto w-11/12">
                  <label htmlFor="text" className="block mb-2 label">
                    Description
                  </label>
                  <textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="form-input input"
                  />
                </div>
              </div>

              <div className="flex ms-3 mt-5">
                <button
                  type="submit"
                  className=" text-white font-bold py-2 px-4 rounded " 
                  style={{
                    backgroundColor: '#7936EB'
                  }}
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className=" text-gray-600 hover:text-white border border-gray-600 hover:bg-slate-600 font-bold py-2 px-4 rounded-2xl ms-3"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
