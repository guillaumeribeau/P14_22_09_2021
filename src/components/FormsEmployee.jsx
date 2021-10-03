import React, { useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import states from "../data/States";
import department from "../data/Department";
import Select from "react-select";
import customStyles from "./SelectStyle";
import firebase from "../utils/firebaseConfig";
import gsap from "gsap";
import employee from "../assets/images/employee.png"
import document from "../assets/images/document.png"


const FormsEmployee = () => {
  const {
    register,
    handleSubmit,
    formState,
    errors,
    setError,
    control,
  } = useForm();

  const createEmployee = (inputData) => {
    const employeeDB = firebase.database().ref("create-employee");

    const employee = {
      birthDate: inputData.birthDate.getFullYear(),
      city: inputData.city,
      department: inputData.department,
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      startDate: inputData.startDate.getDate(),
      states: inputData.states,
      street: inputData.street,
      zipCode: inputData.zipCode,
    };
    employeeDB.push(employee);
  };

  const onSubmit = (data) => {
    createEmployee(data);
  };

  // animation forms
  const leftforms = useRef(null);
  const rightforms = useRef(null);
  const button = useRef(null);
  const documentImg = useRef(null);
 
  useEffect(() => {

    gsap.from(leftforms.current, {
      x: "-250%",
      delay: 1,
      duration: 1,
    });

    gsap.from(rightforms.current, {
      x: "250%",
      delay: 1,
      duration: 1,
    });
    gsap.from(button.current, {
      y: "-250%",
      delay: 1,
      duration: 1,
    });
     gsap.to(documentImg.current, {
       delay:3,
      y:"500px",
      duration:3,
      })
      gsap.to(documentImg.current, {
        delay:6,
        x:"-520px",
        duration:3,
        opacity:0,
        })

  
      },[]);
 

  return (
    <>
      <div class="container">
        <form onSubmit={handleSubmit(onSubmit)} action="#" id="create-employee">
          <div className="container_form">
            <div ref={leftforms} className="left_form_container">
              <label for="firstName">First Name</label>
              <input {...register("firstName")} type="text" id="firstName" />

              <label for="lastName">Last Name</label>
              <input {...register("lastName")} type="text" id="lastName" />

              <div className="container-picker">
                <label for="birthDate">Date of Birth</label>

                <Controller
                  name="birthDate"
                  defaultValue={null}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      selected={value}
                      onChange={onChange}
                      showYearDropdown
                      peekNextMonth
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  )}
                />
              </div>
              <div className="container-picker">
                <label for="startDate">Start Date</label>

                <Controller
                  name="startDate"
                  defaultValue={null}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      selected={value}
                      onChange={onChange}
                      showYearDropdown
                      peekNextMonth
                      showMonthDropdown
                      dropdownMode="select"
                    />
                  )}
                />
              </div>
             <img src={employee}/>
            </div>
     
            <div className="right_form_container" ref={rightforms}>
              <fieldset class="address">
                <legend>Address</legend>

                <label for="street">Street</label>
                <input {...register("street")} id="street" type="text" />

                <label for="city">City</label>
                <input {...register("city")} id="city" type="text" />

                <label for="states">States</label>
                <Controller
                  control={control}
                  name="states"
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      inputRef={ref}
                      styles={customStyles}
                      options={states}
                      value={states.find(
                        (c) => c.abbreviation === states.abbreviation
                      )}
                      onChange={(val) => onChange(val.abbreviation)}
                    />
                  )}
                />

                <label for="zipCode">Zip Code</label>
                <input {...register("zipCode")} id="zip-code" type="number" />
              </fieldset>

              <label for="department">Department</label>
              <Controller
                control={control}
                name="department"
                render={({ field: { onChange, value, ref } }) => (
                  <Select
                    inputRef={ref}
                    styles={customStyles}
                    options={department}
                    value={department.find((c) => c.value === value)}
                    onChange={(val) => onChange(val.value)}
                  />
                )}
              />
            </div>
            <img className="document_icons" ref={documentImg} src={document} alt="document icons" />
          </div>
          <button ref={button}>Save Employee</button>
        </form>
      </div>
    </>
  );
};

export default FormsEmployee;
