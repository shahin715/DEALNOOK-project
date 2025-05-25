import React from 'react';
import { Link } from 'react-router-dom';
import LabelCard from './LabelCard';

// Replace these imports with your actual image paths
import nikeImage from '../../../../assets/adidasmen.avif';
import levisImage from '../../../../assets/newbalance_men.avif';
import hugoImage from '../../../../assets/dealnook_men..png';
import tommyImage from '../../../../assets/topman.webp';

const menLabels = [
  {
    imageSrc: nikeImage,
    overlayText: null,
    fontSizeClass: 'text-3xl',
    linkTo: '/brands/nike',
  },
  {
    imageSrc: levisImage,
    overlayText: null,
    fontSizeClass: 'text-3xl',
    linkTo: '/brands/levis',
  },
  {
    imageSrc: hugoImage,
    overlayText: null,
    fontSizeClass: 'text-5xl',
    textColor: 'text-black',
    linkTo: '/brands/dealnook',
  },
  {
    imageSrc: tommyImage,
    overlayText: null,
    fontSizeClass: 'text-3xl',
    linkTo: '/brands/tommy',
  },
];

const MenLabels = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="w-full px-4">
        <h2 className="text-center text-4xl font-bold mb-10">Men's Brands</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[300px]">
          {menLabels.map(({ imageSrc, brandName, overlayText, fontSizeClass, textColor, linkTo }, idx) => (
            <LabelCard
              key={idx}
              imageSrc={imageSrc}
              brandName={brandName}
              overlayText={overlayText}
              fontSizeClass={fontSizeClass}
              textColor={textColor}
              linkTo={linkTo}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/brands"
            className="border border-black text-black py-2 px-6 text-sm tracking-widest font-semibold hover:bg-black hover:text-white transition"
          >
            SHOP MEN&apos;S BRANDS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenLabels;






