import React, { useState } from "react";
import "../scss/Admin.scss";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Footer from "../Footer";
import Header from "../Header";

const AdminScreen = () => {
  const [active, setActive] = useState("signin");
  const [activeClass, setActiveClass] = useState(true);

  return (
    <>
      <Header />
      <div className="admin">
        <div className="admin__btns">
          <button
            className={activeClass ? "h1" : "h2"}
            onClick={() => {
              setActive("signin");
              setActiveClass(true);
            }}
          >
            SignIn
          </button>
          <button
            className={activeClass ? "h2" : "h1"}
            onClick={() => {
              setActive("signup");
              setActiveClass(false);
            }}
          >
            SignUp
          </button>
        </div>
        <div className="admin__forms">
          {active === "signin" && <SignIn placeholder="Admin ID" />}
          {active === "signup" && <SignUp />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminScreen;
