import React, { useState } from 'react';
import './SpeedDial.scss';
import { LuMusic, LuUser, LuLanguages, LuVolumeOff } from 'react-icons/lu';
import useAudio from '../../assets/Sounds/Sound';
import music from "../../assets/Sounds/m3.mp3"
import grec from "../../assets/Images/grec.png";
import { motion } from "framer-motion";
import ThemeToggle from '../../ui/switchMode/themeToggle';
import eng from "../../assets/Images/Jpeg/engFlag.jpeg";
import fr from "../../assets/Images/Jpeg/frFlag.jpeg";
import mlg from "../../assets/Images/Jpeg/mlgFlag.jpeg";
import { Rating } from 'react-simple-star-rating'

const SpeedDial = () => {
  const [open, setOpen] = useState(false);
  const [showLangOptions, setShowLangOptions] = useState(false);
  const [showModal, setShowModal] = useState(false); // ⬅️ Pour afficher la modal
  const { isPlaying, play, pause } = useAudio(music);
  const [rating, setRating] = useState(0)

  const handleLangHover = (visible) => {
    setShowLangOptions(visible);
  };

  const handleRating = (value) => {
    console.log("Note donnée :", value);
    setRating(value)
    setShowModal(false);
  };

  return (
    <div className="speed-dial">
      {open && (
        <div className="speed-dial-actions">
          <motion.button
            whileHover={{ scale: 1.2 }}
            className="action-btn"
            title="Comptes"
            onClick={() => setShowModal(true)} // ⬅️ Affiche la modal au clic
          >
            <LuUser className='icon' />
          </motion.button>

          {/* LANGUE + sous-boutons */}
          <div
            className="language-container"
            onMouseEnter={() => handleLangHover(true)}
            onMouseLeave={() => handleLangHover(false)}
          >
            <motion.button whileHover={{ scale: 1.2 }} className="action-btn" title="Langue">
              <LuLanguages className='icon' />
            </motion.button>

            {showLangOptions && (
              <div className="language-options">
                <motion.button whileHover={{ scale: 1.1 }} className="flag-btn" title="Anglais">
                  <img src={eng} alt="EN" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="flag-btn" title="Français">
                  <img src={fr} alt="FR" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="flag-btn" title="Malagasy">
                  <img src={mlg} alt="MG" />
                </motion.button>
              </div>
            )}
          </div>

          <motion.button className="action-btn" whileHover={{ scale: 1.2 }} onClick={isPlaying ? pause : play}>
            {isPlaying ? <LuVolumeOff size={15} className='icon' /> : <LuMusic size={15} className='icon' />}
          </motion.button>

          <ThemeToggle />
        </div>
      )}

      <button className="speed-dial-btn" onClick={() => setOpen(!open)} title="Menu">
        <img src={grec} width={20} className={open ? 'rotate' : ''} />
      </button>

      {/* 🟨 MODAL DE NOTATION */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Notez l'application</h2>
            <p>Donnez-nous votre avis !</p>
             <Rating onClick={handleRating} initialValue={rating} />
            <button className="close-btn" onClick={() => setShowModal(false)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeedDial;
// 