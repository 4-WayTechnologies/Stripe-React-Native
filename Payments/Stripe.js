import { StripeProvider } from '@stripe/stripe-react-native';
import React from 'react';
import PaymentScreen from '../PaymentScreen';

export default function Stripe({route}) {

  return (
    <StripeProvider
      publishableKey="pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
  
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    
    >
   <PaymentScreen />
    </StripeProvider>
  );
}
