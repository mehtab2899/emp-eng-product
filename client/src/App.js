import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AOS from "aos";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "aos/dist/aos.css";
import "./App.css";
import HomeScreen from "./components/screens/HomeScreen";
import SignInScreen from "./components/screens/SignInScreen";
import AdminScreen from "./components/screens/AdminScreen";
import EmpLoginScreen from "./components/screens/EmpLoginScreen";
import ForgetPW from "./components/screens/ForgetPassScreen";

// admin
import AdminDashScreen from "./components/screens/AdminScreen/AdminDashScreen";
import AdminMeet from "./components/screens/AdminScreen/AdminMeet";
import AdminChat from "./components/screens/AdminScreen/AdminChat";
import AdminProject from "./components/screens/AdminScreen/AdminProject";
import AdminGmail from "./components/screens/AdminScreen/AdminGmail";
import AdminTracking from "./components/screens/AdminScreen/AdminTracking";
import AdminDocs from "./components/screens/AdminScreen/AdminDocs";

// employee
import EmpDashScreen from "./components/screens/EmployeeScreen/EmpDashScreen";
import EmpChat from "./components/screens/EmployeeScreen/EmpChat";
import EmpMeet from "./components/screens/EmployeeScreen/EmpMeet";
import EmpProject from "./components/screens/EmployeeScreen/EmpProject";
import EmpGmail from "./components/screens/EmployeeScreen/EmpGmail";
import EmpTracking from "./components/screens/EmployeeScreen/EmpTracking";
import EmpDocs from "./components/screens/EmployeeScreen/EmpDocs";

//
import Chat from "./components/screens/EmployeeScreen/Chat";

AOS.init();

const App = () => {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <>
      {/* routings */}
      <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/signin" component={SignInScreen} />
        <Route exact path="/admin" component={AdminScreen} />
        <Route exact path="/employee" component={EmpLoginScreen} />
        <Route exact path="/forgot" component={ForgetPW} />
        <Route exact path="/chat" component={Chat} />
        {/* Admin Dashboard & Features Start */}
        <Route exact path="/admin-dashboard" component={AdminDashScreen} />
        <Route exact path="/admin-meeting" component={AdminMeet} />
        <Route exact path="/admin-chat" component={AdminChat} />
        <Route exact path="/admin-project" component={AdminProject} />
        <Route exact path="/admin-gmail" component={AdminGmail} />
        <Route exact path="/admin-tracking" component={AdminTracking} />
        <Route exact path="/admin-docs">
          <form onSubmit={handleSubmit}>
            <EmpDocs
              accept=".jpg,.png,.jpeg"
              label="Profile Image(s)"
              multiple
              updateFilesCb={updateUploadedFiles}
            />
          </form>
        </Route>{" "}
        {/* Admin Dashboard & Features End */}
        {/* Employee Dashboard & Features Start */}
        <Route exact path="/employee-dashboard" component={EmpDashScreen} />
        <Route exact path="/employee-meeting" component={EmpMeet} />
        <Route exact path="/employee-chat" component={EmpChat} />
        <Route exact path="/employee-project" component={EmpProject} />
        <Route exact path="/employee-gmail" component={EmpGmail} />
        <Route exact path="/employee-tracking" component={EmpTracking} />
        <Route exact path="/employee-docs">
          <form onSubmit={handleSubmit}>
            <EmpDocs
              accept=".jpg,.png,.jpeg"
              label="Profile Image(s)"
              multiple
              updateFilesCb={updateUploadedFiles}
            />
          </form>
        </Route>
        {/* Employee Dashboard & Features End */}
      </Router>
    </>
  );
};

export default App;
