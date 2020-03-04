import { TimelineMax } from 'gsap';

export const closeButtonTransition = (closeButton: HTMLElement): TimelineMax => new TimelineMax.timeline().from(closeButton, {
    autoAlpha: 0,
  });
