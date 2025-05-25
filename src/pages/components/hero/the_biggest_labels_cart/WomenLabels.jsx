import React from 'react';
import { Link } from 'react-router-dom';
import LabelCard from './LabelCard';
import adidasImage from "../../../../assets/adidas.avif";
import mangoImage from '../../../../assets/mango.avif';
import dealnookImage from '../../../../assets/dealnook.avif';
import topshopImage from '../../../../assets/topshop.avif';

const labels = [
  {
    imageSrc: adidasImage,
    overlayText: null,
    linkTo: '/brands/adidas-women',
  },
  {
    imageSrc: mangoImage,
    overlayText: null,
    linkTo: '/brands/mango-women',
  },
  {
    imageSrc: dealnookImage,
    brandName: 'DEALNOOK',
    overlayText: null,
    fontSizeClass: 'text-5xl',
    linkTo: '/brands/dealnook-women',
  },
  {
    imageSrc: topshopImage,
    overlayText: null,
    linkTo: '/brands/topshop-women',
  },
];

const WomenLabels = () => {
  return (
    <section className="w-full px-4 py-10">
      <h2 className="text-center text-4xl font-bold mb-10">The biggest labels</h2>
      
      {/* Full width grid that grows with screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[300px]">
        {labels.map(({ imageSrc, brandName, overlayText, fontSizeClass, linkTo }, idx) => (
          <LabelCard
            key={idx}
            imageSrc={imageSrc}
            brandName={brandName}
            fontSizeClass={fontSizeClass}
            linkTo={linkTo}
          >
            {overlayText}
          </LabelCard>
        ))}
      </div>
      
      <div className="flex justify-center mt-10">
        <Link
          to="/women/brands"
          className="border border-black text-black py-2 px-6 text-sm tracking-widest font-semibold hover:bg-black hover:text-white transition"
        >
          SHOP WOMEN&apos;S BRANDS
        </Link>
      </div>
    </section>
  );
};

export default WomenLabels;