import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../pages/Home.css';

 class ParticleBg extends Component {
    render() {
        return (
           
                 <div className="navbar-custom">
                    <Particles
                height="79vh"
                params={{
                    particles: {
                    number: {
                        value: 80,
                    },
                    size: {
                        value: 2,
                    },
                    },
                    interactivity: {
                    events: {
                        onhover: {
                        enable: true,
                        mode: "repulse",
                        },
                    },
                    },
                }}
                />
            </div>
                
        )
    }
}

export default ParticleBg;
