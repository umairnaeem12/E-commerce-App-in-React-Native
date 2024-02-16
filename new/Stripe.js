import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

export const STRIPE_PUBLISHABLE_KEY = "STRIPE_PUBLISHABLE_KEY";
export const Secret_key = "Secret_key"

const CURRENCY = 'USD';
var CARD_TOKEN = null;

function getCreditCardToken(creditCardData) {
  const card = {
    'card[number]': creditCardData.cardNumber,
    'card[exp_month]': creditCardData.expiryMonth,
    'card[exp_year]': creditCardData.expiryYear,
    'card[cvc]': creditCardData.cvc,
  };

  return fetch('https://api.stripe.com/v1/tokens', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`,
    },
    method: 'post',
    body: Object.keys(card)
      .map((key) => key + '=' + card[key])
      .join('&'),
  })
  .then((response) => response.json())
  .catch((error) => console.log(error));
}

function subscribeUser(creditCardToken) {
  return new Promise((resolve) => {
    CARD_TOKEN = creditCardToken.id;
    setTimeout(() => {
      resolve({ status: true });
    }, 1000);
  });
}

const Stripe = () => {
  const { confirmPayment } = useStripe();

  const onSubmit = async () => {
    const cardDetails = await confirmPayment();

    if (cardDetails.error) {
      alert('Invalid Credit Card');
      return;
    }

    let creditCardToken;
    try {
      creditCardToken = await getCreditCardToken(cardDetails);
    } catch (e) {
      console.log('Error:', e);
      return;
    }

    const { error } = await subscribeUser(creditCardToken);

    if (error) {
      alert(error);
    } else {
      let paymentData = await charges();
      console.log('paymentData', paymentData);
      if (paymentData.status === 'succeeded') {
        alert('Payment Successful');
      } else {
        alert('Payment failed');
      }
    }
  };

  const charges = async () => {
    const card = {
      amount: 50,
      currency: CURRENCY,
      source: CARD_TOKEN,
      description: 'Developers Sin Subscription',
    };

    return fetch('https://api.stripe.com/v1/charges', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${Secret_key}`,
      },
      method: 'post',
      body: Object.keys(card)
        .map((key) => key + '=' + card[key])
        .join('&'),
    }).then((response) => response.json());
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2471A3" />
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Stripe_logo%2C_revised_2016.png/1200px-Stripe_logo%2C_revised_2016.png' }}
        style={styles.ImgStyle}
      />
      <CardField
        postalCodeEnabled={false}
        style={{ width: '100%', height: 50, marginTop: 20 }}
      />

      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ImgStyle: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#2471A3',
    width: 150,
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: '#f4f4f4',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Stripe;
