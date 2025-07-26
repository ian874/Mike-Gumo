import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handlePaystack = async (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !amount || amount <= 0) {
      setError('Please fill in all fields with valid values.');
      return;
    }
    try {
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
        email: email,
        amount: amount * 100, // KSh to kobo
        currency: 'KES',
        onSuccess: async () => {
          try {
            const response = await fetch('https://formspree.io/f/mrblpajl', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ name, email, amount, _subject: 'Campaign Donation' }),
            });
            if (response.ok) {
              alert('Donation recorded! Thank you!');
              setName('');
              setEmail('');
              setAmount('');
            } else {
              setError('Failed to record donation. Please try again.');
            }
          } catch (err) {
            setError('Network error. Please check your connection and try again.');
          }
        },
        onCancel: () => alert('Payment cancelled.'),
      });
    } catch (err) {
      setError('Payment initialization failed. Please try again.');
    }
  };

  return (
    <section id="support" className="py-16 relative bg-gray-900 z-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/Mike-Gumo/background.jpg)',
          opacity: 0.1,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-navy-800/40 to-gray-900/50 z-0"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-white mb-6 tracking-tight">
          Support Mayo’s Campaign
        </h2>
        <div className="max-w-3xl mx-auto bg-white/10 dark:bg-gray-800/10 p-8 rounded-lg shadow-md border border-white/20 opacity-100 z-10">
          <p className="text-lg text-gray-200 dark:text-gray-300 mb-6 leading-relaxed">
            Your donation powers Mayo’s vision for a tech-driven Westlands. Fund youth tech hubs, expand Wi-Fi access, and
            support the campaign for 2027. Every shilling counts!
          </p>
          {error && (
            <p className="text-red-500 mb-4">{error}</p>
          )}
          <form onSubmit={handlePaystack} className="max-w-lg mx-auto">
            <input type="hidden" name="_subject" value="Campaign Donation" />
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="_replyto"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="amount"
                placeholder="Donation Amount (KSh)"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" name="recurring" id="recurring" className="mr-2 text-blue-500 focus:ring-blue-500" />
              <label htmlFor="recurring" className="text-gray-200 dark:text-gray-300">
                Make this a monthly donation
              </label>
            </div>
            <button
              type="submit"
              className="button-primary bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition hover-scale"
            >
              Donate Now
            </button>
          </form>
          <div className="mt-6">
            <div className="w-64 h-6 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden goal-thermometer">
              <div
                className="h-full bg-blue-500"
                style={{ width: '25%' }}
              ></div>
            </div>
            <p className="text-gray-200 dark:text-gray-300 mt-2">Goal: KSh 10M | Raised: KSh 2.5M</p>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="accent-blue bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition hover-scale">
              Share on X
            </button>
            <button className="accent-blue bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition hover-scale">
              Share on Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
