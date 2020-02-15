import { gsap } from "gsap";

export const overlayTransition = (overlay: HTMLElement): TimelineMax => {
  return gsap.timeline().from(overlay, {
    autoAlpha: 0,
  })
};
