import { gsap } from 'gsap';
import { Subscription } from 'knockout';
import { enableBodyScroll, disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Model } from 'app/data/model';
import AbstractBlock from '../AbstractBlock';
import {
  closeButtonTransition,
  overlayTransition,
  panelTransition,
  horizontalFadeIn,
} from './transitions';

export default class {{name_pc}} extends AbstractBlock {
  public static readonly displayName: string = '{{name_sc}}';
  private static isHidden: string = 'is-hidden';
  private readonly popupSubscription: Subscription;
  private readonly popupTransitionTimeline: TimelineMax;
  private readonly closeButton: HTMLElement = this.getElement('[data-close-button]');
  private readonly overlay: HTMLElement = this.getElement('[data-overlay]');
  private readonly closePopupElements: Array<HTMLElement> = [this.closeButton, this.overlay];

  constructor(el: HTMLElement) {
    super(el);
    this.setStyles();
    this.popupSubscription = Model.showPopup.subscribe(this.handlePopupSubscription);
    this.popupTransitionTimeline = this.setupPopupTransitionTimeline();
    this.closePopupElements.forEach(element =>
      element.addEventListener('click', this.handleClosePopup),
    );
  }

  private handleClosePopup = (): void => {
    Model.showPopup(false);
  };

  private setStyles = (): void => {
    this.element.classList.remove({{name_pc}}.isHidden);
    this.element.style.pointerEvents = Model.showPopup() ? 'auto' : 'none';
  };

  private animatePopup = (): void => {
    const timeline = this.popupTransitionTimeline;
    const state = Model.showPopup();
    const duration = state ? timeline.duration() - timeline.time() : timeline.time();
    const progress = state ? 1 : 0;

    gsap.to(timeline, {
      duration,
      progress,
    });
  };

  private setScrollLock = (): void => {
    Model.showPopup() ? disableBodyScroll(this.element) : enableBodyScroll(this.element);
  };

  private handlePopupSubscription = (): void => {
    this.setStyles();
    this.setScrollLock();
    this.animatePopup();
  };

  private setupPopupTransitionTimeline = (): TimelineMax => {
    return gsap
      .timeline({ paused: true })
      .add(overlayTransition(this.overlay))
      .add(panelTransition(this.getElement('[data-panel]')))
      .add(horizontalFadeIn(this.getElement('[data-transition-item]')))
      .add(closeButtonTransition(this.closeButton));
  };

  public dispose() {
    clearAllBodyScrollLocks();
    Model.showPopup(false);
    this.setStyles();
    this.closePopupElements.forEach(element =>
      element.removeEventListener('click', this.handleClosePopup),
    );
    super.dispose();
  }
}
