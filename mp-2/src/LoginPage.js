import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Logo from "./components/Femi logo.png";
import "./components/input.css";

const SignupPage = () => {
  const initialValues = {
    email: "",
    password: "",
    acceptTerms: false,
  };

  const [showModal, setShowModal] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    acceptTerms: Yup.boolean().oneOf([true], "You must accept the terms and conditions"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="w-4/5 mx-auto">
      <Link to="/">
          <img src={Logo} alt="Logo" width={100} height={30} className="my-4" />
        </Link>
      </div>
      <div className="mt-12">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form className="w-96 mx-auto p-6">
              <div className="w-full">
                <h1 className="text-center text-2xl font-bold mb-6">
                  Log in to Femi
                </h1>
                <p className="text-center text-gray-500">
                  New to Femi?{" "}
                  <Link to="/signup" style={{ color: "#7936EB" }}>
                    signup here
                  </Link>
                </p>

                <div className="input-group mt-10 mb-5">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input mx-auto"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-purple-600 text-sm mt-1"
                  />
                </div>

                <div className="input-group">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input mx-auto"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="  text-purple-600 text-sm mt-1"
                  />
                </div>

                <div className="mt-4 inline-block items-center">
                  <Field
                    type="checkbox"
                    name="acceptTerms"
                    className="mr-2"
                  />
                  <label htmlFor="acceptTerms" className="text-gray-500">
                    I accept the{" "}
                    <Link
                      to="#"
                      onClick={openModal}
                      style={{ color: "#7936EB" }}
                    >
                      terms and conditions
                    </Link>
                  </label>
                  <ErrorMessage
                    name="acceptTerms"
                    component="div"
                    className="  text-purple-600 text-sm mt-2"
                  />
                </div>

                <div className="flex justify-center mt-16 mb-10">
                  <button
                    type="submit"
                    className={`text-white font-bold py-2 px-4 rounded-3xl mt-4 w-2/4`}
                    style={{
                      backgroundColor: isValid && dirty ? "#FF398E" : "#CCCCCC",
                    }}
                    disabled={!isValid || !dirty}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ">
          <div className="bg-white p-6 rounded-md sm:w-80 md:w-1/2 lg:w-1/3 ">
            <h2 className="text-xl font-bold mb-4">Terms and Conditions</h2>
            <div className="border-y border-gray-500">
              <p className="my-3">
                By accessing and using our email login service, you agree to the
                following terms:
              </p>

              <p>
                1.) You are responsible for providing accurate and complete
                information during the registration process.
              </p>
              <p>
                2.) Keep your login credentials confidential and do not share
                them with others.
              </p>
              <p>3.) Use our email login service for lawful purposes only.</p>
              <p>
                4.) We are not responsible for the security or privacy of email
                messages sent or received through our service.
              </p>
              <p className="mb-3">
                5.) These terms govern your use of our email login service.
              </p>
            </div>
            <div className="flex mt-4">
              <button
                onClick={closeModal}
                className="text-white bg-gray-500 px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
