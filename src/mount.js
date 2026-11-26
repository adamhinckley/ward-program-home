import { mount } from 'svelte';
import App from './App.svelte';

/** @param {HTMLElement} target */
export function mountApp(target) {
  mount(App, { target, props: { path: window.location.pathname } });
}
