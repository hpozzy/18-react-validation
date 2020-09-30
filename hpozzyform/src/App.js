import React, { useState } from "react"
import validator from "validator"
import "./App.css"

function Form() {
  const [emailText, setEmailText] = useState("")
  const [passwordText, setPasswordText] = useState("")
  const [emailValid, setEmailValid] = useState(true)
  const [nameValid, setNameValid] = useState(true)
  const [websiteValid, setWebsiteValid] = useState(true)
  const [usernameValid, setUserNameValid] = useState(true)

  const [nameText, setNameText] = useState("")
  const [usernameText, setUserNameText] = useState("")
  const [passwordValid, setPasswordValid] = useState(true)
  const [websiteText, setWebsiteText] = useState("")

  const [nameLabel, setNameLabel] = useState("Name")
  const [emailLabel, setEmailLabel] = useState("Email")
  const [usernameLabel, setUsernameLabel] = useState("Username")
  const [passwordLabel, setPasswordLabel] = useState("Password")
  const [websiteLabel, setWebsiteLabel] = useState("Website")

  function handleSubmit(e) {
    e.preventDefault()

    if (validator.isEmpty(nameText)) {
      setNameLabel("Name is required")
      setNameValid(false)
    } else {
      setNameValid(true)
      setNameLabel("Name")
      setNameText(nameText)
    }

    if (!validator.isEmail(emailText)) {
      setEmailLabel("Email is required")
      setEmailValid(false)
      setEmailText("")
    } else {
      setEmailValid(true)
      setEmailLabel("Email")
      setEmailText(emailText)
    }
    if (validator.isEmpty(usernameText)) {
      setUsernameLabel("Username is required")
      setUserNameValid(false)
    } else {
      setUserNameValid(true)
      setUsernameLabel("userName")
      setUserNameText(usernameText)
    }
    if (validator.isEmpty(passwordText)) {
      setPasswordLabel("Password is required")
      setPasswordValid(false)
    } else {
      setPasswordValid(true)
      setPasswordLabel("userName")
      setPasswordText(passwordText)
    }
    if (!validator.isEmail(websiteText)) {
      setWebsiteLabel("Website is required")
      setWebsiteValid(false)
      setWebsiteText("")
    } else {
      setWebsiteValid(true)
      setWebsiteLabel("url")
      setWebsiteText(websiteText)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Profile Form - All Fields Required</h2>

      <div className="groupOfInputs">
        <label htmlFor="name" className={nameValid ? "" : "textRed"}>
          {nameLabel}
        </label>
        <br></br>
        <input
          placeholder={nameLabel}
          id="name"
          type="name"
          value={nameText}
          className={nameValid ? "" : "borderRed"}
          onChange={(e) => setNameText(e.target.value)}
        />
        <br></br>
        <label htmlFor="email" className={emailValid ? "" : "textRed"}>
          {emailLabel}
        </label>
        <br></br>
        <input
          placeholder="emailLabel"
          id="email"
          type="email"
          value={emailText}
          className={emailValid ? "" : "borderRed"}
          onChange={(e) => setEmailText(e.target.value)}
        />
        <br></br>
        <label htmlFor="username" className={usernameValid ? "" : "textRed"}>
          {usernameLabel}
        </label>
        <br></br>
        <input
          placeholder={usernameLabel}
          id="username"
          type="name"
          value={usernameText}
          className={usernameValid ? "" : "borderRed"}
          onChange={(e) => setUserNameText(e.target.value)}
        />
        <br></br>
        <label htmlFor="password" className={passwordValid ? "" : "textRed"}>
          {passwordLabel}
        </label>
        <br></br>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={passwordText}
          className={passwordValid ? "" : "borderRed"}
          onChange={(e) => setPasswordText(e.target.value)}
        />
        <br></br>
        <label htmlFor="password" className={passwordValid ? "" : "textRed"}>
          {passwordLabel}
        </label>
        <br></br>
        <input
          id="password"
          type="password"
          placeholder="Confirm Password"
          value={passwordText}
          className={passwordValid ? "" : "borderRed"}
          onChange={(e) => setPasswordText(e.target.value)}
        />
        <br></br>
        <label htmlFor="website" className={websiteValid ? "" : "textRed"}>
          {websiteLabel}
        </label>
        <br></br>
        <input
          placeholder="Insert URL here"
          id="website"
          type="website"
          value={websiteText}
          className={websiteValid ? "" : "borderRed"}
          onChange={(e) => setWebsiteValid(e.target.value)}
        />
        <br></br>

        <button>Submit</button>
      </div>
    </form>
  )
}

export default Form
