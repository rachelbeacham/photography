import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    date: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        sessionType: '',
        date: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Studio Location',
      details: ['123 Photography Lane', 'Creative District, NY 10001'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@lensphoto.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 9AM - 6PM', 'Sat: 10AM - 4PM', 'Sun: By Appointment'],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 tracking-wider">
              CONTACT
            </h1>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto tracking-wide">
              Ready to capture your special moments? Let's discuss your vision 
              and create something beautiful together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-8 tracking-wider">
                GET IN TOUCH
              </h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="text-green-600 text-2xl mb-4">✓</div>
                  <h3 className="text-xl mb-2 text-green-800 tracking-wide">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 tracking-wide">
                    Thank you for your inquiry. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#d4af37] focus:ring-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#d4af37] focus:ring-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#d4af37] focus:ring-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label htmlFor="sessionType" className="block text-sm font-medium">
                        Session Type *
                      </label>
                      <select
                        id="sessionType"
                        name="sessionType"
                        required
                        value={formData.sessionType}
                        onChange={handleInputChange}
                        className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-[#d4af37] focus:ring-[#d4af37]"
                      >
                        <option value="">Select session type</option>
                        <option value="portrait">Portrait Session</option>
                        <option value="wedding">Wedding Photography</option>
                        <option value="family">Family Session</option>
                        <option value="corporate">Corporate/Headshots</option>
                        <option value="fashion">Fashion Photography</option>
                        <option value="event">Event Photography</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#d4af37] focus:ring-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your vision, location preferences, and any specific requirements..."
                      className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 min-h-[8rem] focus:border-[#d4af37] focus:ring-[#d4af37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-[#d4af37] hover:bg-[#b8941f] text-black py-3 text-lg tracking-wide"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-8 tracking-wider">
                CONTACT INFORMATION
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#d4af37] mt-1" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2 tracking-wide">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 tracking-wide">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl mb-4 tracking-wider">
                  BOOKING PROCESS
                </h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-[#d4af37] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      1
                    </span>
                    <span className="tracking-wide">
                      Send me a message with your session details
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#d4af37] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      2
                    </span>
                    <span className="tracking-wide">
                      We'll schedule a consultation call
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#d4af37] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      3
                    </span>
                    <span className="tracking-wide">
                      Contract signing and 50% deposit secures your date
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#d4af37] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                      4
                    </span>
                    <span className="tracking-wide">
                      We create beautiful memories together!
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
