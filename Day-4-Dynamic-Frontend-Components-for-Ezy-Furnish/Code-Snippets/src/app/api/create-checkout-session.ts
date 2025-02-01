// api/create-checkout-session.ts
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { Product } from '../../../types';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // Automatically picks latest API version
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { items } = req.body;

  try {
    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item: Product) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Convert to cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${req.headers.origin}/success`, // Redirect after successful payment
      cancel_url: `${req.headers.origin}/cancel`,  // Redirect if payment is canceled
    });

    // Send the session ID to the frontend
    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
