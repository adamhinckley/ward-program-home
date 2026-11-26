/**
 * Send a marketing CTA click to Google Analytics, if it has loaded.
 * @param {string} name
 * @param {string} location
 * @param {string} destination
 */
export function trackCtaClick(name, location, destination) {
  if (typeof window === 'undefined') {
    return;
  }

  const gtag = window['gtag'];
  if (typeof gtag !== 'function') {
    return;
  }

  gtag('event', 'mkt_cta_click', {
    cta_name: name,
    cta_location: location,
    cta_destination: destination
  });
}
