import { useEffect, useState } from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import SchedDetail from "./SchedDetail";
import SchedCreate from "./SchedCreate";
import SchedEdit from "./SchedEdit";
import {
  AiTwotoneCalendar,
  AiOutlineClockCircle,
  AiOutlinePushpin,
} from "react-icons/ai";

const SchedListing = () => {
  const [schedData, setSchedData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedschedId, setSelectedschedId] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditMode(false);
  };

  const loadDetail = (id) => {
    setSelectedschedId(id);
    openModal();
  };

  const loadEdit = (id) => {
    setSelectedschedId(id);
    setEditMode(true);
    openModal();
  };

  const removeFunction = (id) => {
    if (window.confirm("Are you sure you want to remove?")) {
      fetch("https://mp2-crud.onrender.com/schedule/" + id, {
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
    fetch("https://mp2-crud.onrender.com/schedule")
      .then((res) => res.json())
      .then((resp) => {
        setSchedData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div  className="w-2/3">
      <div className="bg-white rounded-lg shadow-lg pb-20">
        <div className="p-4">
          <h1 className="text-3xl md:text-5xl font-bold  mb-4 text-center py-3">Calendar</h1>
          <div className="mb-4">
            <SchedCreate />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedData &&
              schedData.map((item) => {
                const images = [image1, image2, image3, image4, image5];
                const randomIndex = Math.floor(Math.random() * images.length);
                const randomImage = images[randomIndex];
                return (
                  <div
                    key={item.id}
                    className="shadow-md m-2 rounded-lg flex flex-col justify-between relative"
                  >
                    <img src={randomImage} alt="" className="rounded-t-lg" />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        <span>
                          <AiTwotoneCalendar style={{ color: "#7936EB" }} />
                        </span>
                        {item.name}
                      </h3>
                      <div className="flex items-center">
                        {" "}
                        <AiOutlinePushpin style={{ color: "BLUE" }} />
                        {item.date}
                      </div>
                      <div className="flex items-center border-b-slate-100">
                        <AiOutlineClockCircle style={{ color: "brown" }} />
                        {item.time > "12:00"
                          ? `${item.time} PM`
                          : `${item.time} AM`}
                      </div>

                      <hr className="text-gray-600 my-3 " />
                      <p className="text-gray-700"> {item.text}</p>

                      <div className="absolute top-0 right-0 mt-4 mr-4">
                        <DropdownMenu>
                          <DropdownMenuItem onClick={() => loadEdit(item.id)}>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => removeFunction(item.id)}
                          >
                            Remove
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => loadDetail(item.id)}>
                            Details
                          </DropdownMenuItem>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4">
            {editMode ? (
              <SchedEdit schedId={selectedschedId} closeModal={closeModal} />
            ) : (
              <SchedDetail schedId={selectedschedId} closeModal={closeModal} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleMenu}
          type="button"
          className="flex items-center justify-center w-6 h-6 rounded-full bg-transparent focus:outline-none"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 7a2 2 0 100-4 2 2 0 000 4zm0 4a2 2 0 100-4 2 2 0 000 4zm0 4a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

const DropdownMenuItem = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      role="menuitem"
    >
      {children}
    </button>
  );
};

export default SchedListing;
