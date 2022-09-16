/*** duplicate object ***/
export function objClone(obj, target = {}, prefix = "") {
  for (let prop in obj) {
    target[prefix + prop] = obj[prop];
  }
  return target;
}
