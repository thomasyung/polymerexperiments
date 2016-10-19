customElements.define('my-custom-template', class extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
    const t = document.querySelector('#my-custom-template');
    const instance = t.content.cloneNode(true);
    shadowRoot.appendChild(instance);
  }
});