import classNames from 'classnames';
import './TransactionItem.scss';

const TransactionItem = ({ date, description, amount, type }) => {
  const amountClasses = classNames('transaction-item__amount', {
    [`transaction-item__amount--${type}`]: type
  });

  return (
    <div className="transaction-item">
      <div className="transaction-item__left">
        <div className="transaction-item__date">{date}</div>
        <div className="transaction-item__description">{description}</div>
      </div>
      <div className={amountClasses}>
        {amount}
      </div>
    </div>
  );
};

export default TransactionItem;