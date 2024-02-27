import * as THREE from "three";
/*
@param color - needs THREE.Color(0xhex)
@param amount - if amount > 0 the color will be brighter, if less, the color will darken
@return hex color converted to THREE.Color
*/
export function adjustColor(color: THREE.Color, amount: number) {
  const hexColor = '#' + color.getHexString().replace(/^#/, '').replace(/../g, color =>
    ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));

  return new THREE.Color(hexColor);
}

/**
 * Converts the given enum to a map of the keys to the values.
 * @param enumeration The enum to convert to a map.
 */
export function enumToMap(enumeration: any): Map<string, string | number> {
  const map = new Map<string, string | number>();
  for (let key in enumeration) {
    //TypeScript does not allow enum keys to be numeric
    if (!isNaN(Number(key))) continue;

    const val = enumeration[key] as string | number;

    //TypeScript does not allow enum value to be null or undefined
    if (val !== undefined && val !== null)
      map.set(key, val);
  }

  return map;
}

export function mathRandom(num = 8) {
  var numValue = - Math.random() * num + Math.random() * num;
  return numValue;
};

export function mathRandonIterval(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}