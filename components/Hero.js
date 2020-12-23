import React from 'react';
import Tilt from 'react-parallax-tilt';

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h2>Desarrollador Web</h2>
        <h1>Raúl J Camacho</h1>
        <h3>
          Apasionado por <br />
          la tecnología y el desarrollo..
          <span>&#160;</span>
        </h3>
      </div>
      <div className="hero-image">
        <Tilt
          className="parallax-effect-img"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={800}
          transitionSpeed={1500}
          scale={1.1}
          gyroscope={true}>
          <img
            src="holograma-raul.png"
            className="inner-element"
            alt="Holograma-Raul"
          />
        </Tilt>
      </div>
    </div>
  );
};
