import { React } from "react";
import "./mix.scss";
import Apple from "@/assets/logos/apple.png";
import Ballymore from "@/assets/logos/ballymore.png";
import Bbc from "@/assets/logos/bbc.png";
import Disney from "@/assets/logos/Disney.png";
import Muse from "@/assets/logos/muse.png";
import netflix from "@/assets/logos/netflix.png";
import stWilliam from "@/assets/logos/StWilliam.png";
import waterside from "@/assets/logos/waterside.png";
const ResponsiveLogos = () => {
  const logos = [
    { src: Apple, alt: "Apple Logo" },
    { src: Ballymore, alt: "Ballymore Logo" },
    { src: Bbc, alt: "Bbc Logo" },
    { src: Disney, alt: "Disney Logo" },
    { src: Muse, alt: "Muse Logo" },
    { src: netflix, alt: "netflix Logo" },
    { src: stWilliam, alt: "stWilliam Logo" },
    { src: waterside, alt: "waterside Logo" }
  ];

  return (
    <div className="logos-container">
      {logos.map((logo, index) => (
        <div key={index} className="logo-item">
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </div>
  );
};

const ComWorkWith = () => {

    return (
        <div className="wrapper">
            <div className="com-work-with-text">Proudly working with</div>
            <ResponsiveLogos />
        </div>
    )
}

export default ComWorkWith;
