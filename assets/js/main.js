// Typed.js animation
$(document).ready(function () {
    new Typed('#typed', {
        strings: ['Hello!', 'Welcome to my website', 'This is @i_thedevil_'],
        typeSpeed: 60,
        backSpeed: 20,
        backDelay: 3000,
        loop: true,
        cursorChar: '|'
    });
});

// tsParticles background
document.addEventListener("DOMContentLoaded", () => {
    tsParticles.load("particles", {
        fullScreen: { enable: false },
        fpsLimit: 60,
        background: { color: "#000010" },
        particles: {
            number: { value: 120, density: { enable: true, area: 800 } },
            color: { value: ["#715cbd", "#ffffff", "#8e7ee5"] },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.2, sync: false } },
            size: { value: { min: 1, max: 4 }, random: true, anim: { enable: true, speed: 2, size_min: 0.5, sync: false } },
            links: { enable: true, distance: 150, color: "#715cbd", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, outModes: { default: "out" } }
        },
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 120, duration: 0.4 }, push: { quantity: 4 } }
        },
        detectRetina: true
    });
});
