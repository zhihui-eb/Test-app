import { React } from "react";
import ComLogo from "@/assets/ComLogo.png";
import InstagramLogo from "@/assets/logos/Instagram.svg";
import TwitterLogo from "@/assets/logos/Twitter.svg";
import FacebookLogo from "@/assets/logos/Facebook.png";
import FooterLogo from "@/assets/footer.png";

import "./mix.scss";

const SocialMeidas = () => {
  const medias = [
    { src: InstagramLogo, alt: "InstagramLogo" },
    { src: TwitterLogo, alt: "TwitterLogo" },
    { src: FacebookLogo, alt: "FacebookLogo" }
  ];

  return (
    <div className="social-medias">
      <div className="company-logo">
        <img src={ComLogo} alt="company-logo" />
      </div>
      <div className="medias-logos">
        {medias.map((item, index) => {
          return <img src={item.src} alt={item.alt} />;
        })}
      </div>
    </div>
  );
};

const CCASection = () => {
  return (
    <div className="CCA-wrapper">
      <div className="links-container">
        <a href="#">Surveys & Inspections</a>
        <a href="#">Portfolio</a>
        <a href="#">Equipment</a>
      </div>
      <div className="CCA-logo-container">
        <div className="CCA-logo">
          <img src={FooterLogo} alt="CCA" />
        </div>
        <div className="CCA-text">CCA Approved</div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <SocialMeidas />
      <CCASection />
    </div>
  );
};

export default Footer;
