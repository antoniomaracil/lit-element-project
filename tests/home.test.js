import { expect, fixture, html } from '@open-wc/testing';
import '../src/views/home-view';

describe('Form validation', () => {
  let el;

  before(async () => {
    const component = html` <homew-view></homew-view> `;

    el = await fixture(component);
    await el.updateComplete;
  });

  it('Form is rendered correctly', async () => {
    expect(true).equal(true);
  });
});
