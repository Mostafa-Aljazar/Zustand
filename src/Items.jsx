import React from "react";
import useCourseStore from "./zustand/itemsStore";

const Items = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );

  return (
    <React.Fragment>
      {courses &&
        courses.map((course, index) => {
          return (
            <div
              className="item"
              key={index}
              style={{ backgroundColor: course?.completed ? "red" : "blue" }}
            >
              <input
                type="checkbox"
                className="check"
                checked={course?.completed}
                onChange={(e) => toggleCourseStatus(course?.id)}
              />

              <label className="item-title">{course?.title}</label>

              <button
                className="item-delete"
                onClick={(e) => removeCourse(course?.id)}
              >
                delete
              </button>
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default Items;

// <div className="item">
// <input type="checkbox" className="check" />
// <label className="item-title">label</label>
// <button className="item-delete">delete</button>
// </div>
