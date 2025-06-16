import React, { useEffect, useRef , useState } from 'react';
import classNames from 'classnames';
import CountUp from 'react-countup';
import './StatsCard.scss';

const StatsCard = ({ title, value, icon, color = 'default', className }) => {
  const countUpRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  // Détecte quand le composant est visible pour lancer l'animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cardClasses = classNames('stats-card', {
    [`stats-card--${color}`]: color,
  }, className);

  // Extrait la valeur numérique et le préfixe/suffixe
  const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ''));
  const prefix = value.match(/^[^0-9.-]+/)?.[0] || '';
  const suffix = value.match(/[^0-9.-]+$/)?.[0] || '';

  return (
    <div className={cardClasses}>
      <div className="stats-card__content">
        <div className="stats-card__icon">{icon}</div>
        <div className="stats-card__info">
          <div className="stats-card__value" ref={countUpRef}>
            {startAnimation ? (
              <CountUp
                start={0}
                end={numericValue}
                duration={2.5}
                decimals={value.includes('.') ? 2 : 0}
                separator=" "
                decimal=","
                prefix={prefix}
                suffix={suffix}
                onEnd={() => console.log('Animation terminée')}
                onStart={() => console.log('Animation démarrée')}
              />
            ) : (
              value
            )}
          </div>
          {title && <div className="stats-card__title">{title}</div>}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;