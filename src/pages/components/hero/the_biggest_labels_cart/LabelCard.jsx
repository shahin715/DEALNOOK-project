// LabelCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LabelCard = ({
  imageSrc,
  brandName = '',
  overlayText,
  fontSizeClass = 'text-3xl',
  textColor = 'text-white',
  linkTo = '#',
}) => {
  return (
    <Link
      to={linkTo}
      className="relative block overflow-hidden group"
    >
      <img
        src={imageSrc}
        alt={brandName}
        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className={`absolute font-bold select-none ${fontSizeClass} ${textColor} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center`}
      >
        {brandName}
        {overlayText && (
          <span className="ml-2 bg-white text-black text-sm rounded-full px-3 py-1 font-normal lowercase">
            {overlayText}
          </span>
        )}
      </div>
    </Link>
  );
};

export default LabelCard;





