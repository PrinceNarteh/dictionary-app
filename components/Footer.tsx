import React from "react";

const Footer = () => {
  return (
    <div className="text-center py-2 bg-blueGreen">
      <p className="text-xl text-offWhite">
        Prinart &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
