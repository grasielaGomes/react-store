import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JPvwYAssvg4JbRf9QcTS04nWsyYfReUvgBSR8hzWvU4oXpSPTzNTf7I4aSLS2qwNdso3ViCB0dG4KLMFKHgKtFS004htxUkVm';

  const onToken = token => {
    alert('Payment Succesfull');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://raw.githubusercontent.com/grasielaGomes/react-store/64290d88247cf6e35587464b1ce7b99d0a7e9ec0/src/assets/crown.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;