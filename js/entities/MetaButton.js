import BehaviorButton from "./BehaviorButton.js";

export default class MetaButton extends BehaviorButton {
  constructor(value) {
    super(value);
    this.element.innerHTML = `
    
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.555 1.375L0 2.237V7.687H6.555V1.375Z" fill="#ffffffcc"/>
        <path d="M0 13.795L6.555 14.728V8.313H0V13.795Z" fill="#ffffffcc"/>
        <path d="M7.278 8.395L7.304 14.773L16 16V8.395H7.278Z" fill="#ffffffcc"/>
        <path d="M16 0L7.33 1.244V7.658H16V0Z" fill="#ffffffcc"/>
      </svg>

    `;
  }
}
