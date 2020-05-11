//lineal-types
//function combine(
//  input1: number | string,
//  input2: number | string,
//  typeResult: "as-number" | "as-text"
//) {
//  let result;
//  if (
//    (typeof input1 === "number" && typeof input2 === "number") ||
//    typeResult === "as-number"
//  ) {
//    result = +input1 + +input2;
//  } else {
//    result = input1.toString() + input2.toString();
//  }
//  return result;
//}
//
//var combinedAges = combine(30, 26, "as-number");
//console.log(combinedAges);
//
//var combinedStringAges = combine(30, 26, "as-number");
//console.log(combinedStringAges);
//
//const combinedNames = combine("Fernando", "Mark", "as-text");
//console.log(combinedNames);
