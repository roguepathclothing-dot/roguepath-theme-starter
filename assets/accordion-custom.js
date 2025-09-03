// Custom Accordion Web Component
if (!customElements.get('accordion-custom')) {
  class AccordionCustom extends HTMLElement {
    constructor() {
      super();
      this.detailsElements = Array.from(this.querySelectorAll('details'));
    }
    connectedCallback() {
      this.detailsElements.forEach(details => {
        details.addEventListener('toggle', () => {
          if (details.open) {
            this.detailsElements.forEach(d => {
              if (d !== details) d.open = false;
            });
          }
        });
      });
    }
  }
  customElements.define('accordion-custom', AccordionCustom);
}