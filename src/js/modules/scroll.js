import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger.js";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".scroll-wrapper",
    content: ".scroll-content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );

  let itemsLeft = gsap.utils.toArray(".gallery__left .gallery__item");

  itemsLeft.forEach((item) => {
    gsap.fromTo(
      item,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          scrub: true,
        },
      }
    );
  });

  let itemsRight = gsap.utils.toArray(".gallery__right .gallery__item");

  itemsRight.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: item,
          scrub: true,
        },
      }
    );
  });
}
