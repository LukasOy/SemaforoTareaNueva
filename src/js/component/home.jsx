import React, { useState } from "react";

export const Home = () => {
  const [brillando, setBrillando] = useState({
    rojo: false,
    amarillo: false,
    verde: false
  });

  const handleClick = luz => {
    setBrillando({
      rojo: luz === "rojo",
      amarillo: luz === "amarillo",
      verde: luz === "verde"
    });
  };

  return (
    <div className="container">
      <div className="semaforo">
        <div
          className={`luz rojo ${brillando.rojo ? "brillo" : ""}`}
          onClick={() => handleClick("rojo")}
        ></div>
        <div
          className={`luz amarillo ${brillando.amarillo ? "brillo" : ""}`}
          onClick={() => handleClick("amarillo")}
        ></div>
        <div
          className={`luz verde ${brillando.verde ? "brillo" : ""}`}
          onClick={() => handleClick("verde")}
        ></div>
      </div>
    </div>
  );
};

export default Home;