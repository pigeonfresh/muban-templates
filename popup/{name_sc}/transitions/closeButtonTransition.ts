import { gsap } from 'gsap';

export const closeButtonTransition = (closeButton: HTMLElement): TimelineMax => {
  return gsap.timeline().from(closeButton, {
    autoAlpha: 0,
  })
};
