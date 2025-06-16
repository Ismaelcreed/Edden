import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import notif from "../../assets/Sounds/notif.mp3";
import useAudio from "../../assets/Sounds/Sound";
import confetti from 'canvas-confetti';
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { audioRef, play } = useAudio(notif);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("darktheme");
    setDarkMode(isDark);
  }, []);

  // 🎉 Fonction confetti personnalisée
  const launchConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const toggleTheme = () => {
    const isDarkNow = !darkMode;
    if (isDarkNow) {
      document.documentElement.classList.add("darktheme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("darktheme");
      localStorage.setItem("theme", "light");
    }
     launchConfetti(); // 🎉 confetti ici !
      play();
      setDarkMode(isDarkNow);
   
  };

  return (
    <>
      <audio ref={audioRef} src={notif} preload="auto" />
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <div className="icon-container">
          {darkMode ? (
            <LuSun className="icon" size={20} />
          ) : (
            <LuMoon className="icon" size={20} />
          )}
        </div>
      </button>
    </>
  );
};

export default ThemeToggle;
