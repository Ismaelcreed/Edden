import { MoreHorizontal } from 'lucide-react';
import classNames from 'classnames';
import './ProjectCard.scss';

const ProjectCard = ({ 
  name, 
  description, 
  status, 
  amount, 
  color = 'gray',
  onClick 
}) => {
  const getProjectIcon = (projectName) => {
    const icons = {
      'AnyPay': '📁',
      'DesignPub': '📁',
      'Epidemie': '📁',
      'Test platform': '📁'
    };
    return icons[projectName] || '📁';
  };

  const cardClasses = classNames('project-card', {
    'project-card--clickable': onClick
  });

  const iconClasses = classNames('project-card__icon', {
    [`project-card__icon--${color}`]: color
  });

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className="project-card__left">
        <div className={iconClasses}>
          {getProjectIcon(name)}
        </div>
        <div className="project-card__info">
          <div className="project-card__name">{name}</div>
          {description && (
            <div className="project-card__description">{description}</div>
          )}
        </div>
      </div>
      
      <div className="project-card__right">
        {status && (
          <div className="project-card__status">{status}</div>
        )}
        {amount && (
          <div className="project-card__amount">{amount}</div>
        )}
        <button 
          className="project-card__menu"
          onClick={(e) => {
            e.stopPropagation();
            // Logique du menu
          }}
        >
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;