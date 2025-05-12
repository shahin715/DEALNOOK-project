import React from "react";
import { footerData } from "../footer/footerData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {footerData.sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold uppercase mb-2">{section.title}</h3>
            <ul className="space-y-1 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.to} className="hover:underline text-gray-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Shopping From Section */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-2">Shopping From:</h3>
          <p className="text-sm mb-2">
            You're in <span>{footerData.shoppingFrom.current.flag}</span> |{" "}
            <span className="text-blue-600 cursor-pointer">CHANGE</span>
          </p>
          <p className="text-sm mb-2">Some of our international sites:</p>
          <div className="flex flex-wrap gap-2 text-2xl">
            {footerData.shoppingFrom.others.map((flag, idx) => (
              <span key={idx}>{flag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t mt-10 pt-4 text-sm text-center text-gray-500">
        <p>© 2025 ASOS</p>
        <p className="mt-2 space-x-2">
          <Link to="/notfound" className="hover:underline">Privacy & Cookies</Link> | 
          <Link to="/notfound" className="hover:underline">Ts&Cs</Link> | 
          <Link to="/notfound" className="hover:underline">Accessibility</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

