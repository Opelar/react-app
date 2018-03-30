/**
 * set document title
 * @param { String } title 
 */
export default function setTitle(title) {
  document.title = title;
  if (window._iframe) {
    let src = window._iframe.src;
    window._iframe.src = src;
  }
}
