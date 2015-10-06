/**
 * Contains the position function.
 * Created by Rory on 9/23/2015.
 */

/* exported position */

/**
 * Finds the position where target would go in list.
 * @param list The list where target would be inserted.
 * @param target The item that would be inserted.
 * @returns {Number} The index where target would go.
 */
function position(list, target) {
  for(var i = 0; i < list.length; i++) {
    if(list[i] >= target) {
      return i;
    }
  }
  return list.length;
}