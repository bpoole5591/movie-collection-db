import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../logo.png';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        image={logo}
        name="tMCD"
        description="Thank you for your donation!"
        panelLabel="Donate $5"
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn btn-outline-primary my-2 my-sm-0">Donate to tMCD!</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
