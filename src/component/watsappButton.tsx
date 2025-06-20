// src/components/ui/WhatsAppButton.tsx
import React from 'react';
import WhatsAppIcon from '../assets/image/watsapp.jpg'

interface WhatsAppButtonProps {
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ className = '' }) => {
  // Direct link you provided:
  const href = 'https://wa.me/message/UGQOXXVYW3QCG1';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`
        fixed bottom-6 right-6 z-50 
        animate-bounce 
        transition-transform duration-300 
        hover:scale-110
        ${className}
      `}
    >
      <div className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center">
        <img
          src={WhatsAppIcon}
          alt="WhatsApp"
          className="w-10 h-10"
        />
      </div>
    </a>
  );
};

export default WhatsAppButton;
