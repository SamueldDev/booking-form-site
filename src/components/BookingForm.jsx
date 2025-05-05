

import React, { useState, useEffect } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    dateTime: '',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save current form data before clearing
    setSubmittedData(formData);

    // Clear the form
    setFormData({
      name: '',
      email: '',
      serviceType: '',
      dateTime: '',
      message: '',
    });

    setIsSubmitted(true);
  };

  // Auto-redirect after 5 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto p-6 bg-blue-50 rounded-lg shadow-md">
        {!isSubmitted ? (
          <>
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Book a Session</h2>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Service Type */}
              <div className="mb-4">
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Service</option>
                  <option value="Strategy Session">Strategy Session</option>
                  <option value="1-on-1 Coaching">1-on-1 Coaching</option>
                  <option value="Consultation">Consultation</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="mb-4">
                <label htmlFor="dateTime" className="block text-sm font-medium text-gray-700">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  id="dateTime"
                  name="dateTime"
                  value={formData.dateTime}
                  onChange={handleChange}
                  required
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Message / Notes */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Add any notes or special requests"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300"
              >
                Submit Booking
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Confirmation Message */}
            <div className="bg-green-500 text-white p-6 rounded-lg text-center mb-6">
              <h2 className="text-2xl font-semibold">Thank You for Your Booking!</h2>
              <p className="mt-2">Your session details are as follows:</p>
              <ul className="mt-4 text-left">
                <li><strong>Name:</strong> {submittedData?.name}</li>
                <li><strong>Email:</strong> {submittedData?.email}</li>
                <li><strong>Service:</strong> {submittedData?.serviceType}</li>
                <li><strong>Date & Time:</strong> {submittedData?.dateTime}</li>
                <li><strong>Message:</strong> {submittedData?.message || 'No message provided'}</li>
              </ul>
              <div className="mt-6">
                <button
                  onClick={() => window.location.href = "/"}
                  className="bg-gray-600 text-white px-6 py-2 rounded-xl hover:bg-gray-700"
                >
                  Return to Home
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
