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
    backgroundColor: "white",
    width: "200px",
    height: "45px",
  }),
};

export default customStyles;
