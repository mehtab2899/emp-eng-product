import React from "react";
import { NavLink } from "react-router-dom";
import "../../scss/Dashboard.scss";
import { FeaturesData } from "../../../data/FeaturesData";
import EmpAside from "../../EmpAside";

const EmpDashScreen = () => {
  return (
    <div className="dashboard">
      <EmpAside />
      <main className="dashboard__main">
        <header>
          <h1>EMPLOYEE DASHBOARD</h1>
        </header>
        <main>
          <div className="feature" id="features">
            <div className="feature__content">
              {FeaturesData.map((feature, index) => {
                return (
                  <div className="feature__content--box" key={index}>
                    <NavLink to={feature.url} className="link">
                      <div className="front-face">
                        <i class={feature.icon}></i>
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

export default EmpDashScreen;
