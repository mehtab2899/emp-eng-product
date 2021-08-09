import React from "react";
import "./scss/Pricing.scss";
import { PricingData } from "../data/PricingData";

const Pricing = () => {
  return (
    <div className="pricing" id="pricing">
      <h1>Pricing</h1>
      <div className="pricing__content">
        {PricingData.map((price, index) => {
          return (
            <div className="pricing__content--card" key={index}>
              <div className="title">
                <i className={price.icon} aria-hidden="true"></i>
                <h2>{price.title}</h2>
              </div>
              <div className="price">
                <h4>
                  <sup>$</sup>
                  {price.price}
                </h4>
              </div>
              <div className="option">
                <ul>
                  {price.features1.map((feature, index) => {
                    return (
                      <li key={index}>
                        <i className={price.checkIcon} aria-hidden="true"></i>
                        &nbsp;
                        {feature}
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  {price.features2.map((feature, index) => {
                    return (
                      <li key={index}>
                        <i className={price.timesIcon} aria-hidden="true"></i>
                        &nbsp;
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <a href="#priceExplore">{price.button}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
