import { useState } from 'react';
import { RefreshCw, User, User2 } from 'lucide-react';
import TransactionItem from '../TransactionItem/TransactionItem';
import './RecentTransaction.scss';

const RecentTransactions = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const feedbacks = [
    { 
      date: '15 novembre 2023', 
      description: 'Excellent service client', 
      note: '5/5', 
      type: 'positive',
      avatar: <User className="feedback-avatar" />,
      gender: 'female'
    },
    { 
      date: '12 octobre 2023', 
      description: 'Interface un peu complexe', 
      note: '3/5', 
      type: 'neutral',
      avatar: <User2 className="feedback-avatar" />,
      gender: 'male'
    },
    { 
      date: '8 octobre 2023', 
      description: 'Fonctionnalités très utiles', 
      note: '5/5', 
      type: 'positive',
      avatar: <User className="feedback-avatar" />,
      gender: 'female'
    },
    { 
      date: '20 septembre 2023', 
      description: 'Temps de réponse lent', 
      note: '2/5', 
      type: 'negative',
      avatar: <User2 className="feedback-avatar" />,
      gender: 'male'
    },
    { 
      date: '12 septembre 2023', 
      description: 'Application intuitive', 
      note: '4/5', 
      type: 'positive',
      avatar: <User className="feedback-avatar" />,
      gender: 'female'
    },
    { 
      date: '8 septembre 2023', 
      description: 'Problème de connexion', 
      note: '1/5', 
      type: 'negative',
      avatar: <User2 className="feedback-avatar" />,
      gender: 'male'
    }
  ];

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulation d'un refresh
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleLoadMore = () => {
    // Logique pour charger plus de feedbacks
    console.log('Charger plus de feedbacks');
  };

  return (
    <section className="recent-transactions">
      <div className="recent-transactions__header">
        <h3 className="recent-transactions__title">FeedBack des Utilisateurs</h3>
        <button 
          className="recent-transactions__refresh"
          onClick={handleRefresh}
          disabled={isLoading}
        >
          <RefreshCw 
            size={16} 
            className={isLoading ? 'recent-transactions__refresh-icon--spinning' : ''}
          />
        </button>
      </div>
      
      <div className="recent-transactions__list">
        {feedbacks.map((feedback, index) => (
          <div key={`${feedback.description}-${index}`} className="feedback-item">
            <div className="feedback-avatar-container">
              {feedback.avatar}
            </div>
            <TransactionItem 
              date={feedback.date}
              description={feedback.description}
              amount={feedback.note}
              type={feedback.type}
            />
          </div>
        ))}
      </div>
      
      <button 
        className="recent-transactions__load-more"
        onClick={handleLoadMore}
      >
        VOIR PLUS
      </button>
    </section>
  );
};

export default RecentTransactions;