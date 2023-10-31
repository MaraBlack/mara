import * as THREE from "three";
/*
@param color - needs hex string
@param amount - if amount > 0 the color will be brighter, if less, the color will darken
@return hex color converted to THREE.Color
*/
export function adjustColor(color: THREE.Color, amount: number) {
  const hexColor = '#' + color.getHexString().replace(/^#/, '').replace(/../g, color =>
    ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));

  return new THREE.Color(hexColor);
}