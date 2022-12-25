import { useEffect, useRef, useLayoutEffect } from "react";
import { hideForm, resetForm, showForm } from "./animation.js";
// import "./animation.js";

const AddEmployee = ({ isActive, onClick, onSubmit }) => {
  const refFirstName = useRef();
  const refLastName = useRef();
  const refSalary = useRef();
  const refLocation = useRef();

  const addForm = useRef();
  const addFormHeading = useRef();

  useLayoutEffect(() => {
    hideForm(addForm.current);
  }, []);

  useEffect(() => {
    if (isActive) {
      showForm(addForm.current, addFormHeading.current);
    } else resetForm(addForm.current);
  });

  function resetInput(fName, lName, salary, location) {
    fName.current.value = "";
    lName.current.value = "";
    salary.current.value = "";
    location.current.value = "";
  }

  function mergeAllInputsInObject(fName, lName, sal, loc) {
    const firstName = fName.current.value.trim();
    const lastName = lName.current.value.trim();
    const salary = sal.current.value.trim();
    const location = loc.current.value.trim();

    // in returning object also including id
    return { firstName, lastName, salary, location };
  }

  return (
    <div
      ref={addForm}
      className=" bg-white absolute top-0 bottom-0 left-0 right-0 z-10"
    >
      <button
        onClick={onClick}
        className="absolute text-red-600 top-10 right-10  text-[50px] font-bold hover:scale-75 transition-all duration-300 "
      >
        x
      </button>
      <div className="px-40 py-20 border-2 rounded-md shadow-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h2 className="text-green-400 mb-12 text-center underline">
          <span ref={addFormHeading} className="inline-block underline">
            Add Form
          </span>
        </h2>
        <form>
          <div className="entry first-name">
            <label htmlFor="first-name">First Name : </label>
            <input ref={refFirstName} type="text" id="first-name" />
          </div>
          <div className="entry last-name">
            <label htmlFor="last-name">Last Name : </label>
            <input ref={refLastName} type="text" id="last-name" />
          </div>
          <div className="entry salary">
            <label htmlFor="salary">Salary : </label>
            <input ref={refSalary} type="number" id="salary" />
          </div>
          <div className="entry location">
            <label htmlFor="location">Location : </label>
            <input ref={refLocation} type="text" id="location" />
          </div>
          <button
            onClick={(e) => {
              const obj = mergeAllInputsInObject(
                refFirstName,
                refLastName,
                refSalary,
                refLocation
              );
              resetInput(refFirstName, refLastName, refSalary, refLocation);
              resetForm(addForm.current);
              onClick();
              onSubmit(obj);
            }}
            type="button"
            className="btn btn--md btn-secondary mt-4 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
