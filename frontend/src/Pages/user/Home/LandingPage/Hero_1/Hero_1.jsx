
import GradientText from "../../../../../Components/GradientText/GradientText";
import "./Hero_1.scss"

const Hero_1 = () => {
  
     const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    },0);
  };

    return (
        <div className="Hero_1">
            <div className="Hero1-content">
                {/* <img src={dots} alt="" className="dots" /> */}
                <h1>
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={5}
                        showBorder={false}
                        className="custom-class"
                    >
                       Bienvenue dans Edden
                    </GradientText>
                </h1>
                <span> "Edden, un portail sacré entre les cieux et la mer, où Poséidon veille depuis son trône d'écume.<br />
          Explorez les mystères de l'Olympe, traversez les jardins d'Élysée,<br />
          et laissez la magie divine guider vos pas."
                </span>
                <button onClick={handleClick}>Plonger</button>

                 <span className="speech">"Reveillez en vous la passion technologique et vos talents"</span>
            </div>
        </div>
    )
}

export default Hero_1;