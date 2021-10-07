import React from "react";
import { useState, Fragment } from "react"
import { storiesOf } from "@storybook/react"

import Modal from "../components/Modal";

const stories = storiesOf("Example", module);

stories.add("Ex1", () => {
    const [active, setActive] = useState(false)

    const close = () => {
      setActive(!active)
    }
  
    return (
      <Fragment>
        <div className = "container">
          <h1>React Modal</h1>
          <h2>By default</h2>
          <button onClick = {() => setActive(true)}>Open</button>
          <Modal
              close = {close}
              open = {active}
          />
        </div>
      </Fragment>
  
    )
});

stories.add("Ex2", () => {
  const [active, setActive] = useState(false)

  const close = () => {
    setActive(!active)
  }

  const customButton = {
    display: "none"
  }

  return (
    <Fragment>
      <div className = "container">
        <h2>With close button only (showClose = true)</h2>
        <button onClick = {() => setActive(true)}>Open</button>
        <Modal
            close = {close}
            escape = {false}
            open = {active}
            outside = {false}
            showClose = {true}
            styleButton = {customButton}
        />
      </div>
    </Fragment>
  )
});

stories.add("Ex3", () => {
  const [active, setActive] = useState(false)

  const close = () => {
    setActive(!active)
  }

  const customContent = {
    background: "#212E53",
    color: "#FFF",
    borderRadius: "0"
  }

  const customButton = {
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "bold",
    background: "#EBACA2",
    width: "12rem",
    padding: "1rem",
    borderRadius: ".3rem"
  }

  return (
    <Fragment>
      <div className = "container">
        <h1>React Modal</h1>
        <h2>Modal customized</h2>
        <button onClick = {() => setActive(true)}>Open</button>
        <Modal
            buttonContent = "Example button"
            close = {close}
            modalContent = "Example 3"
            open = {active}
            styleButton = {customButton}
            styleContent = {customContent}
        />
      </div>
    </Fragment>

  )
});