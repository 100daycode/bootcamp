/***************************************************************************************
 *                                                                                      *
 *                                                                                      *
 *  Ex Oh                                                                               *
 *  Using the JavaScript language, have the function ExOh(str) take the str parameter   *
 *  being passed and return the string true if there is an equal number of x's and o's, *
 *  otherwise return the string false. Only these two letters will be entered in the    *
 *  string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the    *
 *  output should return false because there are 6 x's and 5 o's.                       *
 ***************************************************************************************/

function exOh(str) {
  const w = str.split("");
  w.reduce((e, i) => {
    console.log(i);
  });
}

// this.dataMarital =
//   response.Data &&
//   response.Data.filter(
//     (v, i, a) =>
//       a.findIndex((t) => t.employee_marital_id === v.employee_marital_id) === i
//   );

// console.log(exOh('xooxxxxooxo')) // false
// console.log(exOh('xxxxxooxo')) // false
console.log(exOh("ooxxooxoxx")); // true

module.exports = {
  exOh,
};
