import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Nav from "./Nav";
import * as Yup from "yup";

function Signup() {
  const signupSchema = Yup.object().shape({
    name: Yup.string()
      .required("name is required")
      .min(3, "Name must be 3 character or long"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be 6 character or long"),
  });

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Nav isLoggedin={false} />

        {/* Content area */}
        <div className="flex-1 flex justify-center items-center p-4 overflow-auto">
          <div className="bg-gray-200 w-[90%] max-w-md flex flex-col items-center rounded-lg shadow-lg p-6">
            <div className="bg-indigo-200 w-full text-center p-3 rounded-t-lg font-medium text-lg">
              Signup Page
            </div>

            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              validationSchema={signupSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form className="flex flex-col w-full items-center gap-4 mt-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm font-medium mb-1">Name</label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter the name..."
                    className="bg-white p-2 text-lg rounded outline-none w-full"
                  />
                  <div className="text-sm text-red-500">
                    <ErrorMessage name="name" />
                  </div>
                </div>

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
                  className="w-full bg-gray-400 p-3 text-md font-medium rounded hover:bg-gray-500 mt-2"
                >
                  Signup
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
            Signup Page
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={signupSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form className="flex flex-col w-full px-5 py-4 items-center gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-sm font-medium mb-1">
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter the name..."
                  className="bg-white p-2 text-lg rounded outline-none"
                />
                <div className="text-sm text-red-500">
                  <ErrorMessage name="name" />
                </div>
              </div>
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
                  Signup
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div> */}
    </>
  );
}

export default Signup;
