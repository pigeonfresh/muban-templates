import { gsap, Expo } from 'gsap';

export const panelTransition = (closeButton: HTMLElement): TimelineMax => {
  return gsap.timeline().from(closeButton, {
    duration: 1,
    autoAlpha: 0,
    scale: 0.9,
    ease: Expo.easeInOut,
  })
};
