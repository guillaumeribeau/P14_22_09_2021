import React, { useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import states from "../data/States";
import department from "../data/Department";
import Select from "react-select";
import customStyles from "./SelectStyle";
import firebase from "../utils/firebaseConfig";
import gsap from "gsap";
import employee from "../assets/images/employee.png";
import document from "../assets/images/document.png";


const FormsEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },

    control,
  } = useForm();

  const createEmployee = (inputData) => {
    const employeeDB = firebase.database().ref("create-employee");

    const employee = {
      birthDate: inputData.birthDate.toLocaleDateString(),
      startDate: inputData.startDate.toLocaleDateString(),
      city: inputData.city,
      department: inputData.department,
      firstName: inputData.firstName,
      lastName: inputData.lastName,
      states: inputData.states,
      street: inputData.street,
      zipCode: inputData.zipCode,
    };
    employeeDB.push(employee);
  };

  const onSubmit = (data) => {
    console.log(data)
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
      delay: 3,
      y: "500px",
      duration: 3,
    });
    gsap.to(documentImg.current, {
      delay: 6,
      x: "-520px",
      duration: 3,
      opacity: 0,
    });
  }, []);

  return (
    <>
      <div class="container">
        <form onSubmit={handleSubmit(onSubmit)} action="#" id="create-employee">
          <div className="container_form">
            <div ref={leftforms} className="left_form_container">
              <label for="firstName">First Name</label>
              <input
                {...register("firstName", { required: true })}
                type="text"
                id="firstName"
                name="firstName"
              />
              <ErrorMessage
                errors={errors}
                name="firstName"
                message="Firstname is required"

                  render={({ message }) => <span className='error_message'>{message}</span>}
              />

              <label for="lastName">Last Name</label>
              <input
                {...register("lastName", { required: true })}
                type="text"
                id="lastName"
              />
              <ErrorMessage
                errors={errors}
                name="lastName"
                message="Lastname is required"
                render={({ message }) => <span className='error_message'>{message}</span>}
              />

              <div className="container-picker">
                <label for="birthDate">Date of Birth</label>

                <Controller
                  name="birthDate"
                  defaultValue={null}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                    required
                      name='birthDate'
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
                      required
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
              <img src={employee} alt="employee" />
            </div>

            <div className="right_form_container" ref={rightforms}>
              <fieldset class="address">
                <legend>Address</legend>

                <label for="street">Street</label>
                <input {...register("street",{ required: true })} id="street" name='street' type="text" />
                <ErrorMessage
                  errors={errors}
                  name="street"
                  message='Street is required'
                  render={({ message }) => <span className='error_message'>{message}</span>}
                />

                <label for="city">City</label>
                <input {...register("city", { required: true })} id="city" type="text" />
                <ErrorMessage
                  errors={errors}
                  name="city"
                  message='City is required'
                  render={({ message }) => <span className='error_message'>{message}</span>}
                />

                <label for="states">States</label>
                <Controller
                  control={control}
                  name="states"
                  defaultValue={states[0].value}
                  render={({ field: { onChange, value, ref } }) => (
                    <Select
                      inputRef={ref}
                      styles={customStyles}
                      options={states}
                      value={states.find((c) => c.value === value )}
                      onChange={(val) => onChange(val.value)}
                    />
                  )}
                />
                
                <label for="zipCode">Zip Code</label>
                <input {...register("zipCode", {required:true})} id="zip-code" type="number" />
                <ErrorMessage
                  errors={errors}
                  name="zipCode"
                  message='Zip code is required'
                  render={({ message }) => <span className='error_message'>{message}</span>}
                />
              </fieldset>

              <label for="department">Department</label>
              <Controller
                control={control}
                name="department"
                defaultValue={department[0].value}
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
            <img
              className="document_icons"
              ref={documentImg}
              src={document}
              alt="document icons"
            />
          </div>
          <button ref={button}>Save Employee</button>
        </form>
      </div>
    </>
  );
};

export default FormsEmployee;
