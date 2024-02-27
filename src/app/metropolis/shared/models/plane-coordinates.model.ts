/*
y - height
x,z - 2d coordinates

    | y
    |
    |_ _ _ _ _ x
   /
  /
 / z

*/

export interface PlaneCoordinates {
  x: number,
  y?: number,
  z: number
}