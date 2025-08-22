import React from "react";
import Nav from "./Nav";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Signin() {
  const navigate = useNavigate();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Enter valid email"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Nav isLoggedin={false} />

        <div className="flex-1 flex justify-center items-center pt-4 pb-4 overflow-auto">
          <div className="bg-gray-200 w-[90%] max-w-md flex flex-col items-center rounded-lg shadow-lg p-6">
            <div className="bg-indigo-200 w-full text-center p-3 rounded-t-lg font-medium text-lg">
              Login Page
            </div>

            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                console.log(values);
                navigate("/todos");
              }}
              validationSchema={loginSchema}
            >
              <Form className="flex flex-col w-full items-center gap-6 mt-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">Email</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter the email..."
                    className="bg-white p-2 text-lg rounded outline-none w-full"
                  />
                  <div className="text-sm text-red-500">
                    <ErrorMessage name="email" />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">Password</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter the password..."
                    className="bg-white p-2 text-lg rounded outline-none w-full"
                  />
                  <div className="text-sm text-red-500">
                    <ErrorMessage name="password" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-400 p-3 text-md font-medium rounded hover:bg-gray-500"
                >
                  Login
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>

      {/* <Nav isLoggedin={false} />
      <div className="heightMax flex mx-16 sm:mx-24 lg:mx-48 justify-center items-center">
        <div className="bg-gray-200 h-auto w-[450px] flex flex-col items-center rounded-lg shadow-lg">
          <div className="bg-indigo-200 w-full text-center p-3 rounded-t-lg font-medium text-lg">
            Login Page
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              navigate("/todos");
            }}
            validationSchema={loginSchema}
          >
            <Form className="flex flex-col w-full px-5 py-7 items-center gap-8">
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-sm font-medium mb-1">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter the email..."
                  className="bg-white p-2 text-lg rounded outline-none"
                />
                <div className="text-sm text-red-500">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-sm font-medium mb-1">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter the password..."
                  className="bg-white p-2 text-lg rounded outline-none"
                />
                <div className="text-sm text-red-500">
                  <ErrorMessage name="password" />
                </div>
              </div>
              <div className="w-full">
                <button
                  className="w-full bg-gray-400 p-3 text-md font-medium rounded mt-2 hover:bg-gray-500"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div> */}
    </>
  );
}

export default Signin;
