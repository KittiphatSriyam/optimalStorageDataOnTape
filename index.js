const optimalStorageDataOnTape = (...tape) => {
  console.log("tape->>", tape);
  let que = [];
  for (let loop in tape) {
    que = [...que, ...tape.slice(0, Number(loop) + 1)];
  }
  let size = que.reduce((total, num) => total + num, 0);
  console.log("size->>", size);
  return size;
};

/*

    [][][]   () + () + () =
    6, 3, 8; 

    Ex : 5, 10, 3

    5, 10, 3;
    5, 3, 10;
    10, 5, 3;
    10, 3, 5;
    3, 5, 10; 
*/

let tape = [5, 10, 3];
optimalStorageDataOnTape(...tape);
console.log("------------------------");
let tape1 = [5, 3, 10];
optimalStorageDataOnTape(...tape1);
console.log("------------------------");
let tape2 = [10, 5, 3];
optimalStorageDataOnTape(...tape2);
console.log("------------------------");
let tape3 = [10, 3, 5];
optimalStorageDataOnTape(...tape3);
console.log("------------------------");
let tape4 = [3, 5, 10];
optimalStorageDataOnTape(...tape4);
console.log("------------------------");
let tape5 = [3, 10, 5];
optimalStorageDataOnTape(...tape5);
console.log("------------------------");
