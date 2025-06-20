// src/pages/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <main className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <p className="mb-4">
        Welcome to She's Essentials, your premier destination for luxurious lingerie and sleepwear. 
        We believe that feeling comfortable and confident in your sleepwear is essential for a good night's rest and a positive start to your day.
      </p>
      <p className="mb-4">
        Founded with passion and dedication, She's Essentials offers a curated collection of high-quality fabrics, 
        exquisite designs, and perfect fits tailored to celebrate every body. Our sleepwear line is crafted to 
        combine softness, durability, and style, ensuring you feel pampered from the moment you slip them on.
      </p>
      <p className="mb-4">
        Our lingerie collection focuses on both comfort and elegance. Whether you're looking for everyday essentials 
        or special occasion pieces, we have a variety of styles—smooth seamless panties, supportive bras, 
        delicate lace details, and more. We prioritize inclusive sizing and designs that make you feel confident 
        and beautiful.
      </p>
      <p className="mb-4">
        At She's Essentials, sustainability and ethical production are at the heart of what we do. We partner with 
        trusted manufacturers who adhere to responsible practices, ensuring that each piece is made with care 
        for both people and the planet.
      </p>
      <p className="mb-4">
        Thank you for choosing She's Essentials. We are honored to be part of your self-care routine. If you have 
        any questions, feedback, or special requests, please don’t hesitate to <a 
          href="mailto:your-email@example.com" 
          className="text-blue-600 hover:underline"
        >contact us</a>. 
      </p>
    </main>
  );
};

export default AboutUs;
