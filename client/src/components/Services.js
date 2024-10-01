import React, { useRef } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUserAlt, FaBuilding, FaMoneyBillWave, FaCar, FaRedo, FaShieldAlt, FaHeart, FaCarAlt, FaSuitcase, FaUmbrella } from 'react-icons/fa';

const loanCategories = [
  { name: 'Home Loan', description: 'Transform your dreams into reality with our home loans.', icon: <FaHome size={40} className="text-teal-600" /> },
  { name: 'Personal Loan', description: 'Get cash quickly for any personal needs with minimal hassle.', icon: <FaUserAlt size={40} className="text-teal-600" /> },
  { name: 'Business Loan', description: 'Fuel your business growth with our flexible financing options.', icon: <FaBuilding size={40} className="text-teal-600" /> },
  { name: 'Loan Against Property', description: 'Unlock the value of your property for urgent financial needs.', icon: <FaMoneyBillWave size={40} className="text-teal-600" /> },
  { name: 'Car Loan', description: 'Drive away with your new car today with our easy car loans.', icon: <FaCar size={40} className="text-teal-600" /> },
  { name: 'Resale Home Loan', description: 'Get financing for a resale home with ease and flexibility.', icon: <FaRedo size={40} className="text-teal-600" /> },
  { name: 'Bank Transfer & Top-Up Loan', description: 'Consolidate and enhance your finances with our top-up loans.', icon: <FaBuilding size={40} className="text-teal-600" /> },
];

const insuranceCategories = [
  { name: 'Health Insurance', description: 'Stay protected with our comprehensive health insurance plans.', icon: <FaShieldAlt size={40} className="text-teal-600" /> },
  { name: 'Life Insurance', description: 'Secure your loved ones’ future with our reliable life insurance options.', icon: <FaHeart size={40} className="text-teal-600" /> },
  { name: 'Auto Insurance', description: 'Drive safely with our extensive auto insurance coverage.', icon: <FaCarAlt size={40} className="text-teal-600" /> },
  { name: 'Property Insurance', description: 'Protect your property from unforeseen events with our insurance plans.', icon: <FaUmbrella size={40} className="text-teal-600" /> },
  { name: 'Travel Insurance', description: 'Travel with peace of mind using our travel insurance plans.', icon: <FaSuitcase size={40} className="text-teal-600" /> },
];

const LoanCategories = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null); // Reference to the scroll container

  const handleLearnMore = () => {
    navigate('/contact-form');
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -scrollRef.current.clientWidth : scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative bg-gradient-to-r from-blue-600 to-teal-500 py-8 md:py-16 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 bg-white opacity-20 rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-72 h-72 bg-white opacity-30 rounded-full absolute bottom-0 right-0 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
          Discover Our Premium Loan & Insurance Solutions
        </h2>
        <div className="relative overflow-hidden">
          {/* Left Arrow */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 shadow hover:bg-gray-200" 
            onClick={() => scroll('left')}
          >
            <span className="text-teal-600">&lt;</span>
          </button>
          {/* Categories Container */}
          <div 
            ref={scrollRef} 
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-4 scrollbar-hide"
          >
            {loanCategories.concat(insuranceCategories).map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-500 hover:text-white relative overflow-hidden min-w-[250px] snap-start"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-10 rounded-full"></div>
                <div className="relative z-10 flex items-center justify-center mb-4 transform transition-all duration-300 hover:rotate-12">
                  {item.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 hover:text-white relative z-10">
                  {item.name}
                </h3>
                <p className="mb-6 text-gray-700 hover:text-white relative z-10">
                  {item.description}
                </p>
                <button
                  onClick={handleLearnMore}
                  className="bg-teal-600 text-white py-2 px-6 rounded-full hover:bg-teal-700 transition-transform duration-300 transform hover:scale-105 relative z-10"
                >
                  Explore Now
                </button>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 shadow hover:bg-gray-200" 
            onClick={() => scroll('right')}
          >
            <span className="text-teal-600">&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoanCategories;
