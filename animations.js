// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Navbar Slide-In Animation on Page Load
gsap.from("#navbar", {
  duration: 1,
  y: -100, // Starts off-screen above
  opacity: 0,
  ease: "power2.out",
  delay: 0.5
});

// 2. Hero Content Fade-In and Slide-Up Animation
gsap.from("#hero-heading, #hero-subtext, #cta-button", {
  duration: 1.2,
  y: 50, // Starts off-screen below
  opacity: 0,
  stagger: 0.3, // Delay each element's animation
  ease: "power3.out",
  delay: 1.5 // Wait for the navbar to finish
});

// 3. Button Pulse Effect on Hover
const ctaButton = document.getElementById('cta-button');

ctaButton.addEventListener('mouseenter', () => {
    gsap.to(ctaButton, {
        scale: 1.05,
        duration: 0.3,
        y: -3,
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
        ease: "power1.out"
    });
});

ctaButton.addEventListener('mouseleave', () => {
    gsap.to(ctaButton, {
        scale: 1,
        duration: 0.3,
        y: 0,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        ease: "power1.out"
    });
});
