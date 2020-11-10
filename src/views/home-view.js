import { LitElement, html } from 'lit-element';

export class HomeView extends LitElement {
  static get styles() {
    return [];
  }

  render() {
    return html`<div>Hello world</div>`;
  }
}
customElements.define('home-view', HomeView);
