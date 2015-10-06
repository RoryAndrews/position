/* global position */

describe("Player", function() {

  var testlist = [1, 3, 5, 6];

  it("target value 5 should return 2", function() {
    expect(position(testlist, 5)).toEqual(2);
  });

  it("target value 2 should return 1", function() {
    expect(position(testlist, 2)).toEqual(1);
  });

  it("target value 7 should return 4", function() {
    expect(position(testlist, 7)).toEqual(4);
  });

  it("target value 0 should return 0", function() {
    expect(position(testlist, 0)).toEqual(0);
  });

});
