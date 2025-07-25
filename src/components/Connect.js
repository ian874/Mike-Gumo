import React, { useState } from 'react';

const Connect = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mrblpajl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, _subject: 'Campaign Contact' }),
      });
      if (response.ok) {
        setSuccess('Message sent! Thank you for connecting.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="connect" className="py-16 relative bg-gray-900 z-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/background.jpg)',
          opacity: 0.1,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-navy-800/40 to-gray-900/50 z-0"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-white mb-6 tracking-tight">
          Join the Movement
        </h2>
        <div className="max-w-3xl mx-auto bg-white/10 dark:bg-gray-800/10 p-8 rounded-lg shadow-md border border-white/20 opacity-100 z-10">
          <p className="text-lg text-gray-200 dark:text-gray-300 mb-6 leading-relaxed">
            Connect with Mayo Gumo to support the campaign or volunteer for Westlands 2027. Your voice matters!
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <input type="hidden" name="_subject" value="Campaign Contact" />
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
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
              <textarea
                name="message"
                placeholder="Message"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:text-white"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="button-primary bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition hover-scale"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6">
            {/* TODO: Replace with real volunteer URL when provided by client */}
            <button
              className="accent-blue bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition hover-scale"
              // eslint-disable-next-line
            >
              Volunteer Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
