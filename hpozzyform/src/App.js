import React, { useState } from "react"
import validator from "validator"
import "./App.css"

function Form() {
  const [emailText, setEmailText] = useState("")
  const [passwordText, setPasswordText] = useState("")
  const [emailValid, setEmailValid] = useState(true)
  const [nameValid, setNameValid] = useState("")
  const [websiteValid, setWebsiteValid] = useState("")
  const [usernameValid, setUserNameValid] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (!validator.isEmail(emailText)) {
      setEmailValid(false)
    } else {
      setEmailValid(true)
    }

    if (!validator.isURL(websiteValid)) {
      setWebsiteValid(false)
    } else {
      setWebsiteValid(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Profile Form - All Fields Required</h2>

      <div className="groupOfInputs">
        <label htmlFor="name">
          <p>Name - Cannot Be Blank</p>
        </label>
        <input
          placeholder="Name"
          id="name"
          type="name"
          value={nameValid}
          className={nameValid ? "" : "text-red"}
          onChange={(e) => setNameValid(e.target.value)}
        />

        <label htmlFor="email">
          <p>Email - Please Enter a Valid Email</p>
        </label>
        <input
          placeholder="email@email.com"
          id="email"
          type="email"
          value={emailText}
          className={emailText ? "" : "text-red"}
          onChange={(e) => setEmailText(e.target.value)}
        />

        <label htmlFor="username">
          <p>Username - Cannot Be Blank</p>
        </label>
        <input
          placeholder="username"
          id="username"
          type="name"
          value={usernameValid}
          className={usernameValid ? "" : "text-red"}
          onChange={(e) => setUserNameValid(e.target.value)}
        />

        <label htmlFor="password">
          <p>Password - Cannot Be Blank</p>
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={passwordText}
          className={passwordText ? "" : "text-red"}
          onChange={(e) => setPasswordText(e.target.value)}
        />

        <label htmlFor="password">
          <p>Confirm Password - Cannot Be Blank</p>
        </label>
        <input
          id="password"
          type="password"
          placeholder="Confirm Password"
          value={passwordText}
          className={passwordText ? "" : "text-red"}
          onChange={(e) => setPasswordText(e.target.value)}
        />

        <label htmlFor="website">
          <p>Website - Please Enter a Valid URL</p>
        </label>
        <input
          placeholder="Insert URL here"
          id="website"
          type="website"
          value={websiteValid}
          className={websiteValid ? "" : "text-red"}
          onChange={(e) => setWebsiteValid(e.target.value)}
        />
        <br></br>

        <button>Submit</button>
      </div>
    </form>
  )
}

export default Form
