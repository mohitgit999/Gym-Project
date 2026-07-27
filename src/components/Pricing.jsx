import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './Pricing.css';

const pricingPlans = [
  {
    id: 1,
    name: 'Basic',
    price: '$49',
    period: '/month',
    features: [
      'Access to Gym Equipment',
      'Locker Room Access',
      'Free WiFi',
      '1 Personal Training Session'
    ],
    recommended: false
  },
  {
    id: 2,
    name: 'Pro',
    price: '$89',
    period: '/month',
    features: [
      'Everything in Basic',
      'Unlimited Group Classes',
      'Sauna & Spa Access',
      'Nutrition Plan Consultation'
    ],
    recommended: true
  },
  {
    id: 3,
    name: 'Elite',
    price: '$149',
    period: '/month',
    features: [
      'Everything in Pro',
      'Unlimited Personal Training',
      'Guest Pass (2/month)',
      'Exclusive VIP Lounge Access'
    ],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Membership <span className="text-accent">Plans</span></h2>
          <p className="section-subtitle">Choose the plan that fits your goals and join the elite.</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
              {plan.recommended && <div className="recommended-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheck className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'} btn-block`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
