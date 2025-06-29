import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CheckoutForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!stripe || !elements) {
      return;
    }

    try {
      // 1. Create payment intent on your backend
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: product.price * 100 }) // Stripe uses cents
      });

      const { clientSecret } = await response.json();

      // 2. Confirm payment
      const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Nom du client' // Replace with form data
          }
        }
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  const errorVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3 }
    }
  };

  const successVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const successItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="stripe-form"
      initial="hidden"
      animate="visible"
      variants={formVariants}
    >
      <div className="form-group">
        <motion.label
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Informations de carte
        </motion.label>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <CardElement 
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': { color: '#aab7c4' }
                },
                invalid: { color: '#9e2146' }
              }
            }}
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            className="error-message"
            variants={errorVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="error"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {success && (
          <motion.div
            className="success-message"
            variants={successVariants}
            initial="hidden"
            animate="visible"
            key="success"
          >
            <motion.div variants={successItem}>✓</motion.div>
            <motion.div variants={successItem}>Paiement réussi!</motion.div>
            <motion.div variants={successItem}>Merci pour votre achat</motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={!stripe || loading}
        className="pay-button"
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        animate={loading ? "tap" : "rest"}
      >
        {loading ? (
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          >
            🔄
          </motion.span>
        ) : (
          `Payer ${product.price} Ar`
        )}
      </motion.button>
    </motion.form>
  );
};

export default CheckoutForm;