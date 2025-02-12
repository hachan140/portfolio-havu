document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray(".panel");

  // Horizontal scrolling effect
  const scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1.5,
      end: "+=3000"
    }
  });

  const workElements = [
    { description: ".work-description-1", image: ".work-image-1", delay: 0 },
    { description: ".work-description-2", image: ".work-image-2", delay: 0.25 },
    { description: ".work-description-3", image: ".work-image-3", delay: 0.3 },
  ];

  workElements.forEach((el) => {
    gsap.to(el.description, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: el.description,
        containerAnimation: scrollTween,
        toggleActions: "play none none reverse",
        once: true,
        start: "top right",
      },
      delay: el.delay
    });

    gsap.to(el.image, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "expo.inOut",
      stagger: 0.35,
      scrollTrigger: {
        trigger: el.image,
        containerAnimation: scrollTween,
        toggleActions: "play none none reverse",
        once: true,
        start: "top right",
      },
      delay: el.delay + 0.1
    });
  });

  gsap.to(".hero-section .nav-bar", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "expo.inOut",
    stagger: 0.35,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 80%", // Adjust when the animation starts
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(".hero-section div.z-10", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "expo.inOut",
    stagger: 0.35,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 80%", // Adjust when the animation starts
      toggleActions: "play none none reverse",
    },
    delay: 0.25
  });

  gsap.to(".hero-section p.z-10", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "expo.inOut",
    stagger: 0.35,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 80%", // Adjust when the animation starts
      toggleActions: "play none none reverse",
    },
    delay: 0.25
  });


  gsap.to(".skills-slider", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "expo.inOut",
    stagger: 0.35,
    scrollTrigger: {
      trigger: ".skills-slider",
      start: "top 80%", // Adjust when the animation starts
      toggleActions: "play none none reverse",
      once: true
    },
    delay: 0.25
  });

  gsap.to(".about-profile-container", {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
      once: true
    }
  });

  gsap.from(".stats-container", {
    x: 100, // Start 100px to the right
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".stats-container",
      start: "top 80%", // Starts animation when the top of the element hits 80% of viewport
      toggleActions: "play none none reverse",
      once: true
    }
  });

  gsap.to(".experience-container", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".experience-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
      once: true
    }
  });

  gsap.from(".accordion-container > div", {
    x: -100, // Start 100px to the left
    opacity: 0,
    duration: 0.8,
    stagger: 0.2, // Adds 0.2s delay between each item's animation
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".accordion-container",
      start: "top 80%", // Starts animation when the top of the container hits 80% of viewport
      toggleActions: "play none none reverse",
      once: true
    }
  });

  gsap.to(".final-content", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".final",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.to(".project-function", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".project-function",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  gsap.to(".project-name", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".project-name",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    delay: 0.2 // Slight delay after project-function
  });

  gsap.to(".project-image", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".project-image",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    delay: 0.4 // Slight delay after project-name
  });

  // Statistics section animation
  gsap.from(".statistic-item", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".statistic-item",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  // Other works section animation
  gsap.set(".other-works-section", {
    opacity: 0,
    scale: 0.8
  });

  gsap.to(".other-works-section", {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".other-works-section",
      start: "top center+=100",
      toggleActions: "play none none reverse",
      once: true
    }
  });

  gsap.to(".rotating-square", {
    rotation: 360,
    scale: 1.2,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  const counters = document.querySelectorAll(".count-number");

  counters.forEach(counter => {
    let finalValue = parseInt(counter.getAttribute("data-count")); // Extract only the numeric value
    let prefix = counter.textContent.match(/^\D+/) || ""; // Extract prefix (e.g., "$")
    let suffix = counter.textContent.match(/\D+$/) || ""; // Extract suffix (e.g., "+")

    gsap.fromTo(counter,
      { innerHTML: 0 },
      {
        innerHTML: finalValue,
        duration: 4.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 85%",
          once: true,
        },
        onUpdate: function () {
          counter.innerHTML = `${prefix}${Math.floor(this.targets()[0].innerHTML)}${suffix}`;
        }
      }
    );
  });

});
