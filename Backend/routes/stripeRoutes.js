import express from 'express';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const router = express.Router();

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables.');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

router.use(express.json());

router.post('/create-checkout-session', async (req, res) => {
  const { title, amount } = req.body;
  console.log('➡️ Incoming checkout request:', { title, amount });

  const numericAmount = Number(amount);

  // ✅ FIXED VALIDATION: Allow ₹1 and above
  if (!numericAmount || isNaN(numericAmount) || numericAmount < 50) {
  return res.status(400).json({ error: 'Amount must be at least ₹50 to proceed with payment.' });
}

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: title?.trim() || 'Donation',
            },
            unit_amount: Math.round(numericAmount * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/success`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/cancel`,
      metadata: {
        donationTitle: title || 'Donation',
      },
    });

    console.log('✅ Stripe session created:', session.url);
    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('❌ Stripe session error:', error.message);
    res.status(500).json({ error: 'Something went wrong while creating the session.' });
  }
});

export default router;
