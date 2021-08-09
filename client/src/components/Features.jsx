import React from "react";
import "./scss/Features.scss";
import { FeaturesData } from "../data/FeaturesData";

const Services = () => {
  return (
    <div className="features" id="features">
      <h1>Features </h1>
      <div className="features__content">
        {FeaturesData.map((service, index) => {
          return (
            <div className="features__content--box" key={index}>
              <div className="front-face">
                <i class={service.icon}></i> <span>{service.title1}</span>
              </div>
              <div className="back-face">
                <span>{service.title2}</span>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
