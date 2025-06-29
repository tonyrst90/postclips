import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label } from 'reactstrap';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe outside of component
let stripePromise: Promise<any> | null = null;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');
  }
  return stripePromise;
};

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (paymentMethodId: string) => Promise<void>;
}

const CardForm = ({ onSave, onClose }: { onSave: (paymentMethodId: string) => Promise<void>, onClose: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)!,
      });

      if (stripeError) {
        setError(stripeError.message || 'An error occurred');
        return;
      }

      if (paymentMethod) {
        await onSave(paymentMethod.id);
        onClose();
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label className="campaign-label">Card Details</Label>
        <div className="p-3 border border-gray-300 rounded-md" style={{ background: '#fff' }}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      </FormGroup>

      {error && (
        <div className="text-danger mb-3">{error}</div>
      )}
    </Form>
  );
};

export default function AddCardModal({ isOpen, onClose, onSave }: AddCardModalProps) {
  const [stripeLoaded, setStripeLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      getStripe().then(() => {
        setStripeLoaded(true);
      });
    } else {
      setStripeLoaded(false);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      <ModalHeader toggle={onClose}>
        <div className="campaign-subtitle">Add New Card</div>
      </ModalHeader>
      <ModalBody>
        {stripeLoaded ? (
          <Elements stripe={getStripe()}>
            <CardForm onSave={onSave} onClose={onClose} />
          </Elements>
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </ModalBody>
      <ModalFooter className="pb-3">
        <div className="d-flex justify-content-between w-100">
          <Button
            className="btn-chipped btn-chipped-gray"
            style={{
              maxWidth: '200px',
              width: '100%'
            }}
            onClick={onClose}
            disabled={!stripeLoaded}
          >
            CANCEL
          </Button>
          <Button
            className="btn-chipped btn-chipped-white"
            style={{
              maxWidth: '200px',
              width: '100%'
            }}
            onClick={() => {
              const form = document.querySelector('form');
              if (form) form.requestSubmit();
            }}
            disabled={!stripeLoaded}
          >
            {!stripeLoaded ? (
              <span>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> Loading...
              </span>
            ) : (
              'SAVE CARD'
            )}
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
} 