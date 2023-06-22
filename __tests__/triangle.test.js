import Triangle from '../src/js/triangle.js';

describe('Triangle', () => {

  test('should correctly determine whether three lengths are not a triangle', () => {
    const notTriangle = new Triangle(3, 9, 22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });
});