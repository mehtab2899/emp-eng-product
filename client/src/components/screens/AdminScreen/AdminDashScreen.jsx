import React from "react";
import { NavLink } from "react-router-dom";
import "../../scss/Dashboard.scss";
import { FeaturesData } from "../../../data/FeaturesData";
import AdminAside from "../../AdminAside";

const AdminDashScreen = () => {
  return (
    <div className="dashboard">
      <AdminAside />
      <main className="dashboard__main">
        <header>
          <h1>ADMIN DASHBOARD</h1>
        </header>
        <main>
          <div className="feature" id="features">
            <div className="feature__content">
              {FeaturesData.map((feature, index) => {
                return (
                  <div className="feature__content--box" key={index}>
                    <NavLink to={feature.url1} className="link">
                      <div className="front-face">
                        <i class={feature.icon}></i>{" "}
                        <span>{feature.title1}</span>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </main>
    </div>
  );
};

export default AdminDashScreen;
