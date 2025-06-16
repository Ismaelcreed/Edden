import { useRef, useLayoutEffect } from "react";
import { useEffect, useState } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import "./Hero_2.scss";
import TrueFocus from "../../../../../Components/TrueFocus/TrueFocus";
import CircularText from "../../../../../Components/CircularText/CircularText";
import Particles from "../../../../../Components/Particles/Particles";
import TiledCard from "../../../../../Components/TiledCard/TiledCard";
import woman from "../../../../../assets/Images/Jpeg/PicturesWoman.jpeg";
import feedBack1 from "../../../../../assets/Images/Jpeg/feedBack2.jpeg"


gsap.registerPlugin(ScrollTrigger);

const Hero_2 = () => {
  const component = useRef(null);
  const slider = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const arrowRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".section");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
      gsap.fromTo(
        arrowRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: arrowRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, component);



    return () => ctx.revert();
  }, []);

  return (
    <div className="Hero_2-container" ref={component}>
      <div className="firstContainer">
        <TrueFocus
          sentence="C'est quoi Edden?"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />
      </div>

      <div className="scroll-container" ref={slider}>
        <div className="section section-1">

          <div className="section-content">
            <h2>
              <CircularText
                text="EDDEN APPLICATION"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </h2>
            <p className="subtitle">L'univers d'EDDEN.</p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="description">
              Une plateforme qui illumine vos journées grâce à la technologie moderne et à une expérience utilisateur exceptionnelle.<br />
              Découvrez un univers où chaque interaction est pensée pour vous simplifier la vie, vous informer et vous accompagner au quotidien.<br />
              Conçue pour être intuitive, rapide et agréable, notre solution s’adapte à vos besoins et évolue avec vous.<br />
              Rejoignez-nous pour explorer un nouveau monde numérique, innovant et accessible à tous.
            </motion.p>
          </div>
        </div>

        <div className="section section-2"
          ref={sectionRef}>
          <div className="text-section2">
            <h2>Notre vision du futur</h2>
            <span>
              Une technologie <strong>centrée sur l’humain</strong>, tournée vers demain.
              Elle facilitera la prise de décisions
              pour les professionnels et les autorités en
              fournissant des <strong>données précises et exploitables</strong>.
            </span>
          </div>
          <img src={woman} alt="Woman Pictures" />
        </div>
        <div className="section section-3">
          <h2>Pourquoi Edden est différent ?</h2>
          <TiledCard imageSrc={feedBack1} />
        </div>
        <div className="section section-4">
          <h2>Rejoignez l'aventure</h2>
          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Particles
              particleColors={['#047185', '#047185']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>
      </div>

      <div className="lastContainer">
        <h2>Fin du scroll horizontal</h2>

      </div>
    </div>
  );
};

export default Hero_2;
