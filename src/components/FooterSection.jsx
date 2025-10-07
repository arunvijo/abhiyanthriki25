import React from 'react';
// import emailjs from '@emailjs/browser'; // 1. Uncomment after installing: npm install @emailjs/browser

// --- IMPORT YOUR LOGO IMAGES ---
// 2. Make sure these paths are correct for your project structure
import a3kLogo from '../assets/figma/A3K.png';
import jubileeLogo from '../assets/figma/Jubilee.png';
import rsetLogo from '../assets/figma/RSET.png';


const FooterSection = () => {
  const form = React.useRef();
  const [statusMessage, setStatusMessage] = React.useState('');

  // --- EMAILJS CONFIGURATION ---
  // IMPORTANT: Replace these with your actual EmailJS credentials
  const SERVICE_ID = 'service_v54ktla';
  const TEMPLATE_ID = 'template_spvae2b';
  const PUBLIC_KEY = '-1zpENpPnvmPD8SJF';
  // -----------------------------

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    // 3. Uncomment the block below to enable email sending
    /*
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatusMessage('Feedback sent successfully!');
        form.current.reset();
        setTimeout(() => setStatusMessage(''), 3000); // Clear message after 3 seconds
      }, (error) => {
        console.log(error.text);
        setStatusMessage('Failed to send feedback. Please try again.');
        setTimeout(() => setStatusMessage(''), 3000);
      });
    */

    // Placeholder logic for demonstration
    console.log('Form submitted. Uncomment emailjs logic to send emails.');
    setStatusMessage('Feedback sent successfully! (Demo)');
    form.current.reset();
    setTimeout(() => setStatusMessage(''), 3000);
  };

  return (
    <footer className="relative w-full bg-black/50 text-neutral-300 py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-start justify-between gap-12 md:gap-8">

        {/* Left Column: Logos, Address & Map */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo Group */}
          <div className="flex flex-col items-center md:items-start">
    {/* MODIFIED: Logo and year are now in a flex container */}
    <div className="flex items-center gap-3">
        <img src={a3kLogo} alt="A3K Logo" className="h-20 w-auto" />
        {/* This container stacks "20" on top of "25" */}
        <div className="flex flex-col leading-none">
            <span className="text-4xl font-extrabold text-white">20</span>
            <span className="text-4xl font-extrabold text-white">25</span>
        </div>
    </div>
    
    {/* The other logos remain below */}
    <div className="flex items-center gap-6 mt-6">
        <img src={jubileeLogo} alt="Jubilee Logo" className="h-16 w-auto object-contain" />
        <img src={rsetLogo} alt="RSET Logo" className="h-16 w-auto object-contain" />
    </div>
</div>
          
          <p className="mt-6 text-sm text-neutral-400">
            Rajagiri School of Engineering & Technology<br />
            Kochi, Kerala 682039
          </p>
          
          {/* Embedded Google Map */}
          <div className="mt-6 w-full max-w-sm rounded-lg overflow-hidden border-2 border-neutral-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.590214224168!2d76.32759901524383!3d10.05286029281742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c30932828b1%3A0x454817a3ec45b44!2sRajagiri%20School%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1672661555181!5m2!1sen!2sin"
              className="w-full h-48 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RSET Location"
            ></iframe>
          </div>
        </div>

        {/* NEW: Middle Column for Quick Links (visible on web view) */}
        <div className="flex flex-col items-center justify-start gap-5 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-2 text-white">Quick Links</h3>
            <a href="#home" className="cursor-target cursor-none font-semibold hover:text-red-500 transition-colors uppercase tracking-widest">Home</a>
            <a href="/eventdetails" className="cursor-target cursor-none font-semibold hover:text-red-500 transition-colors uppercase tracking-widest">Events</a>
            <a href="#" className="cursor-target cursor-none font-semibold hover:text-red-500 transition-colors uppercase tracking-widest">Registration</a>
        </div>

        {/* Right Column: Contact Form */}
        <div id='contact' className="w-full flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold uppercase tracking-wider mb-4 text-white">Contact</h3>

          <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="bg-neutral-800 border border-neutral-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="bg-neutral-800 border border-neutral-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              required
              rows="4"
              className="bg-neutral-800 border border-neutral-600 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="cursor-target bg-transparent border-2 border-red-500 text-red-500 font-bold py-3 px-6 rounded-md hover:bg-red-500 hover:text-white transition-all duration-300 uppercase tracking-widest cursor-none"
            >
              Send Feedback
            </button>
            {statusMessage && <p className="text-center text-sm mt-2">{statusMessage}</p>}
          </form>
        </div>
      </div>

      {/* MODIFIED: Added developer credits */}
      <div className="text-center mt-16 pt-8 border-t border-neutral-700 text-xs text-neutral-500">
        <p className='mb-2'>Developed with ❤️ by Arun Vijo, Abhishikth & Neehar</p>
        <p>© 2025, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default FooterSection;