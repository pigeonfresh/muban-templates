import { gsap } from 'gsap';

export const horizontalFadeIn = (items: Array<HTMLElement> | Element): TweenMax => {
  return gsap.from(items, {
    autoAlpha: 0,
    stagger: 2,
  })
};
