import { useEffect, useState } from "react";
import axios from "axios";
import {
  AiTwotoneCalendar,
  AiOutlineClockCircle,
  AiOutlinePushpin,
} from "react-icons/ai";

const SchedEdit = ({ schedId, closeModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    fetchScheduleData();
  }, [schedId]);

  const fetchScheduleData = () => {
    axios
      .get(`https://mp2-crud.onrender.com/schedule/${schedId}`)
      .then((res) => {
        const { name, email, date, time, text  } = res.data;
        setName(name);
        setEmail(email);
        setDate(date);
        setTime(time);
        setText(text);

      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const SchedData = {  name, email, date, time ,text };
  
    axios
      .put(`https://mp2-crud.onrender.com/schedule/${schedId}`, SchedData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        alert("Saved successfully.");
        setModalVisible(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  

  const handleClose = () => {
    closeModal();
  };

  return (
    <div className={`modal ${modalVisible ? "show" : ""}`}>
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">{name}</h1>


        <div className="flex justify-between">
  <div className="w-1/2">
    <div className="flex items-center gap-1">
      <AiOutlinePushpin style={{ color: "blue" }} />
      {date}
    </div>
  </div>
  <div className="w-1/2">
    <div className="flex items-center border-b-slate-100 gap-2">
      <AiOutlineClockCircle style={{ color: "brown" }} />
      {time > "12:00" ? `${time} PM` : `${time} AM`}
    </div>
  </div>
</div>



        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          </div>

          <div className="flex gap-2">
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">
              Date
            </label>
            <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700">
              Time
            </label>
            <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          </div>

          <div className="mb-4">
            <label htmlFor="text" className="block text-gray-700">
              Description
            </label>
            <textarea
              id="text"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={text}
            ></textarea>

          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Update
            </button>
            <button
            onClick={handleClose}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SchedEdit;
