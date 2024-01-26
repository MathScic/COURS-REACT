import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les img importé depuis balise img sont accessible dans public donc juste "./" pour les trouver */}
      <img src="./logo192.png" alt="Logo React" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
