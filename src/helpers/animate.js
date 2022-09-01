/*** scroll up or down ***/
export function scrollSmooth(elem) {
  const el = document.getElementById(elem);
  if (el) {
    el.scrollIntoView({behavior: "smooth"})
  }
}