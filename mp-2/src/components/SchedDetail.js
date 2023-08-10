import { useEffect, useState } from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import './navbar.css'
import {
  AiOutlineClockCircle,
  AiOutlinePushpin,
} from "react-icons/ai";

const SchedDetail = ({ schedId, closeModal }) => {
  const [schedData, setSchedData] = useState(null);

  useEffect(() => {
    fetch(`https://mp2-crud.onrender.com/schedule/${schedId}`)
      .then((res) => res.json())
      .then((resp) => {
        setSchedData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [schedId]);

  if (!schedData) {
    return <div>Loading...</div>;
  }

  const { name, date, time, text } = schedData;
  const images = [image1, image2, image3, image4, image5];
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return (
   <div  style={{ zIndex: 9999 }}>
    <div >
     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 max-w-md">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
         
          <div className="justify-between flex">
          <div className="w-1/2">
          <div className="flex items-center">
            <AiOutlinePushpin style={{ color: "BLUE" }} />
            {date}
          </div>
          </div>
          <div className="w-1/2">
          <div className="flex items-center border-b-slate-100">
            <AiOutlineClockCircle style={{ color: "brown" }} />
            {time > "12:00" ? `${time} PM` : `${time} AM`}
          </div>
          </div>
          </div>

          <hr className="text-gray-600 my-3" />
          <p className="text-gray-700">{text}</p>
        </div>
        <div className="mb-4">
          <img src={randomImage} alt="" className="rounded-lg" />
        </div>
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
   </div>

   </div>
  );
};

export default SchedDetail;
