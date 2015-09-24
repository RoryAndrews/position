/**
 * Created by Rory on 9/23/2015.
 */

var testlist = [1, 2, 4, 7];

function position(list, target) {
  for(var i = 0; i < list.length; i++) {
    if(list[i] >= target) {
      return i;
    }
  }
  return list.length;
}

console.log(position(testlist, 8));