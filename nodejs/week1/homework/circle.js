class Circle {
  constructor(radius) {
    this.radius = radius
  }
  getDiameter() {
    const diameter = this.radius * 2
    return diameter
  }
  getCircumference() {
    const circumference = 2 * Math.PI * this.radius
    return circumference
  }
  getArea() {
    const area = Math.PI * (this.radius * this.radius)
    return area
  }
}
const circle = new Circle(10)
console.log(circle.getDiameter())
console.log(circle.getCircumference())
console.log(circle.getArea())
