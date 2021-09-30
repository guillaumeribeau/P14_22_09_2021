const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: "black",
    padding: 20,
    backgroundColor: "danger",
  }),

  control: (styles) => ({
    ...styles,
    backgroundColor: "#00B2D0",
    width: "200px",
    height: "45px",
    color:"white",
  }),
};

export default customStyles;
