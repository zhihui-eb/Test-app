import { React } from "react";
import FeaturesImg from "@/assets/features-img.webp";
import Image from "react-bootstrap/Image";


import "./mix.scss";

const FeaturesSection = () => {
  const listItems = [
    "FAA & CAA approved pilots ",
    "FAA & CAA High Altitude & Night Operation licenses ",
    "35 years experience photography & filming",
    "Safety Case to operate down to a 10 metre radius of people in Central London ",
    "Full Public Liability insurance with £10 million cover",
    "Over 2000 hours of flying with 100% safety record",
    "Experience in over 30 countries worldwide"
  ];

  return (
    <div className="features-wrapper">
      <div className="features-container">
        <div className="features-section-1">
          <div className="text-content">
            <h2 className="features-title">This is a H2 heading</h2>
            <ul>
              {listItems.map((item, index) => {
                return <li className="features-text">{item}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="features-section-2">
          <img src={FeaturesImg} alt="features" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
