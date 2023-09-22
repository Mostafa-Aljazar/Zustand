import React, { useState } from "react";
import useCourseStore from "./zustand/itemsStore";

const Form = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const addCourse = useCourseStore((state) => state.addCourse);

  // console.log(  addCourse)

  const handelAdd = (e) => {
    e.preventDefault();
    if (courseTitle == "") return alert("please add a course title");
    const item = {
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
    }

    addCourse(item)
    setCourseTitle("")

  };

  return (
    <form className="form" onSubmit={handelAdd}>
      <input
        type="text"
        className="inp-add"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button type="submit" className="btn-add">
        add
      </button>
    </form>
  );
};

export default Form;
