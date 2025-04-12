import React from 'react';
import ads1 from "../assets/ads1-min.png";
import ads2 from "../assets/ads2-min.png";
import ads3 from "../assets/ads3-min.png";
import ads4 from "../assets/ads4-min.png";

const Sponsored = () => {
  const adsData = [
    { img: ads1, link: "https://neshop.com.np/product/frontech-kb-0040-wired-gaming-combo-keyboard-and-optical-mouse-rgb-backlight-104-keys-combo-set/?partner=aipathshala" },
    { img: ads2, link: "https://neshop.com.np/product/modern-kids-reading-writing-toys/?partner=aipathshala" },
    { img: ads3, link: "https://neshop.com.np/product/iphone-charger-case-for-18-20w/?partner=aipathshala" },
    { img: ads4, link: "https://neshop.com.np/product/boult-drift-bluetooth-calling-1-85-hd-500nits-brightness-150-watchfaces-spo2-smartwatch-2/?partner=aipathshala" },
  ];

  const shuffledAds = adsData.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="bg-white p-6 mt-10 rounded-2xl shadow-lg w-full max-w-7xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Sponsored</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {shuffledAds.map((ad, index) => (
          <img
            key={index}
            src={ad.img}
            onClick={() => window.open(ad.link, "_blank")}
            className="rounded-lg shadow cursor-pointer hover:scale-105 duration-300"
            alt={`ads-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsored;
