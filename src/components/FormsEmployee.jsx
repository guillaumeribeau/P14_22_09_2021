import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import states from "../data/States";
import department from "../data/Department";
import Select from "react-select";
import customStyles from "./SelectStyle";
import firebase from "../utils/firebaseConfig";

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
    console.log(data)
   createEmployee(data)
 
  }
  


  return (
    <>
      <div class="container">
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="#" id="create-employee">
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
                  placeholderText="Select BirthDay"
                  selected={value}
                  onChange={onChange}
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
                  placeholderText="Select Start Date"
                  selected={value}
                  onChange={onChange}
                />
              )}
            />
          </div>

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
                  defaultValue={states[0]}
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
                defaultValue={department[0]}
                inputRef={ref}
                styles={customStyles}
                options={department}
                value={department.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
              />
            )}
          />

          <button>Save</button>
        </form>
      </div>
    </>
  );
};

export default FormsEmployee;
