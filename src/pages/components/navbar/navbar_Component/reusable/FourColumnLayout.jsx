import React from "react";
import { Link } from "react-router-dom";

// Generic list with optional bold style and link
const ListColumn = ({ title, items }) => (
  <div>
    <h3 className="font-bold mb-4 uppercase text-sm">{title}</h3>
    <ul className="space-y-2 text-sm">
      {items.map(({ label, bold, to }, idx) => (
        <li key={idx} className={bold ? "font-semibold" : "font-normal"}>
          <Link to={to ?? "#"} className="hover:underline">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// List with images on left + label, each item links somewhere
const ImageListColumn = ({ title, items }) => (
  <div>
    <h3 className="font-bold mb-4 uppercase text-sm">{title}</h3>
    <ul className="space-y-4">
      {items.map(({ imgSrc, label, to }, idx) => (
        <li
          key={idx}
          className="flex items-center border-b border-gray-200 pb-2 last:border-none"
        >
          <Link to={to ?? "#"} className="flex items-center w-full hover:underline">
            <img
              src={imgSrc}
              alt={label}
              className="w-10 h-10 rounded-full object-cover mr-4"
            />
            <span className="text-sm">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Big image with overlay text, clickable link
const ImageCardColumn = ({ title, item }) => (
  <div>
    <h3 className="font-bold mb-4 uppercase text-sm">{title}</h3>
    <Link to={item.to ?? "#"} className="relative rounded overflow-hidden shadow-lg block">
      <img
        src={item.imgSrc}
        alt={item.label}
        className="w-full h-72 object-cover"
      />
      <div className="absolute bottom-3 left-0 right-0 text-center text-white font-bold text-lg bg-black bg-opacity-40 py-2">
        {item.label}
      </div>
    </Link>
  </div>
);

const FourColumnLayout = ({ newProducts, summer, brandDrops, newEdit }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
        <ListColumn title="NEW PRODUCTS" items={newProducts} />
        <ImageListColumn title="SUMMER" items={summer} />
        <ImageListColumn title="BRAND DROPS" items={brandDrops} />
        <ImageCardColumn title="NEW EDITS" item={newEdit} />
      </div>
    </div>
  );
};

export default FourColumnLayout;
