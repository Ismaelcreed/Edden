import "./Footer.scss";
import { FaReact, FaNodeJs, FaFacebook, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import img1 from "../../../../assets/Images/Jpeg/EMIT.png";
import img2 from "../../../../assets/Images//Jpeg/Akata.jpg";
import img3 from "../../../../assets/Images//Jpeg/Computer.jpg";
import img4 from "../../../../assets/Images//Jpeg/emitech.jpg";
import img5 from "../../../../assets/Images//Jpeg/FiharySoft.jpg";
import img6 from "../../../../assets/Images//Jpeg/relia.jpg";

const Footer = () => {
  const partnerImages = [img1, img2, img3, img4, img5, img6];
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Section footer-left */}
        <div className="footer-left">
          {/* Liens utiles */}
          <div className="footer-links">
            {/* <h3>Liens utiles</h3> */}
            <a href="/signaler-cas">Signaler un cas</a>
            <a href="/quiz">Assistant IA</a>
            <a href="/cartographie">Carte infografique</a>
            <a href="/a-propos">À propos de nous</a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Section footer-right */}
        <div className="footer-right">
          <h3>Partenaires officiels :</h3>
          <Marquee pauseOnHover={true} speed={50}>
            {partnerImages.map((img, index) => (
              <div key={index} style={{ margin: "0 20px" }}>
                <img src={img} alt={`Partenaire ${index + 1}`} style={{ height: "140px", width: "185px", borderRadius: "10px" }} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <p>©  { new Date().getFullYear() } Edden. Tous droits réservés.</p>
      </div>
      <div className="custom-shape-divider-bottom-1740654120">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;