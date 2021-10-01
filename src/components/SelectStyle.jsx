const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: "#343959",
    padding: 20,
    backgroundColor: "danger",
  }),

  control: (styles) => ({
    ...styles,
    backgroundColor: "#F2BA52",
    width: "200px",
    height: "45px",
    color:"white",
  }),
};

export default customStyles;
