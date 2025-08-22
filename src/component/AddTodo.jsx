/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AiOutlineClose } from "react-icons/ai";
import * as Yup from "yup";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function AddTodo({ isOpen, onClose, isEdit, id }) {
  const todoSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    desc: Yup.string(),
  });
  const [todoItem, setTodoItem] = useState({});

  useEffect(() => {
    if (!id) return;

    const fetchTodoById = async () => {
      try {
        const docRef = doc(db, "todo1", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setTodoItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTodoById();
  }, [id]);

  const addTodo = async (todo) => {
    try {
      const collectionRef = collection(db, "todo1");
      await addDoc(collectionRef, todo);
    } catch (error) {
      console.log(error.message);
    }
  };

  const editTodo = async (updateTodo, id) => {
    try {
      const docRef = doc(db, "todo1", id);
      if (id) await updateDoc(docRef, updateTodo);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!isOpen) return null;
  return (
    <div
      className="absolute inset-0 flex justify-center items-start top-1/2 -translate-y-1/3 mx-5"
      onClick={onClose}
    >
      <div
        className="bg-white w-[430px] max-w-xl mx-auto rounded-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-400 flex justify-end p-2 rounded-t-md">
          <AiOutlineClose className="cursor-pointer" onClick={onClose} />
        </div>
        <Formik
          enableReinitialize
          initialValues={
            isEdit
              ? {
                  title: todoItem?.title || "",
                  desc: todoItem?.desc || "",
                }
              : {
                  title: "",
                  desc: "",
                }
          }
          validationSchema={todoSchema}
          onSubmit={(values) => {
            const today = new Date().toISOString().split("T")[0];
            const newTodo = { ...values, time: today };

            if (isEdit) editTodo(newTodo, id);
            else addTodo(newTodo);

            onClose();
          }}
        >
          <Form className="flex flex-col items-center gap-4 py-3">
            <div className="flex flex-col sm:w-80">
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                type="text"
                placeholder="Enter title..."
                className="border w-full p-1 ps-2 rounded-md h-10"
              />
              <div className="text-red-500 text-sm">
                <ErrorMessage name="title" />
              </div>
            </div>
            <div className="flex flex-col sm:w-80">
              <label htmlFor="desc">Description</label>
              <Field
                name="desc"
                as="textarea"
                placeholder="Enter description (optional)"
                className="border w-full p-1 ps-2 rounded-md h-10"
              />
              <div className="text-red-500 text-sm">
                <ErrorMessage name="desc" />
              </div>
            </div>
            <button
              className="bg-blue-300 px-4 py-2 rounded-xl hover:bg-blue-400"
              type="submit"
            >
              {isEdit ? "Update" : "Add"} Todo
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default AddTodo;
