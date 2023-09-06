import React,  { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Particle() {
  
  
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
    
  }, []);

  return (
          <Particles
        id="tsParticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   "image": `url(${require('./Images/flash.jpg')})`, 
          // },
          fullScreen:{
            enable: 'true',
            zIndex: -5,
          },
          style : {
            width: 'full',
            height: 'full',

          },
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ff0000",
            },
            // links: {
            //   color: "#ffffff",
            //   distance: 150,
            //   enable: true,
            //   opacity: 0.5,
            //   width: 1,
            // },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 200,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 10 },
            },
          },
          detectRetina: false,
          
        }}
        
        />
        
  );
}
