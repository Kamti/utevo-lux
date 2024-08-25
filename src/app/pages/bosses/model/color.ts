export class Color {
  r: number;
  g: number;
  b: number;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  public GetRgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
