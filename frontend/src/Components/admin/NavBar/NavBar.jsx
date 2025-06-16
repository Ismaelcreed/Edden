import './NavBar.scss';
import { LuAlignLeft, LuUser, LuBell } from "react-icons/lu";
import { useState, useEffect } from 'react';
import RotatingText from '../../RotatingText/RotatingText';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Mise à jour chaque seconde

    return () => clearInterval(timer); // Nettoyage
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Format 24h
    });
  };
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <h1 className="header__title">
            <RotatingText
              texts={['Edden', 'App', 'Dashboard']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>
        </div>
      </div>
      <div className="header__right">
        <div className="header__balance">
          <span className="header__balance-amount">{formatTime(currentTime)}</span>
        </div>
        <div className="header__profile">
          <div className="header__notification"><LuBell /></div>
        </div>
      </div>
    </header>
  );
};

export default Header;