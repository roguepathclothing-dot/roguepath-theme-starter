// Anchored Popover Web Component
class AnchoredPopover extends HTMLElement {
  connectedCallback() {
    this.querySelector('.popover-trigger').onclick = () => {
      this.querySelector('.popover-content').classList.toggle('active');
    };
  }
}
customElements.define('anchored-popover', AnchoredPopover);