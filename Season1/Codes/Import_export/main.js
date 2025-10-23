// const functionFromMainFile = require('./sum');
console.log('main file');


//----->>> when we have only one functions to extract
// const ans = calculateSum();
// console.log(ans);


//----->>>more than one variable from the main file
// const ans = functionFromMainFile.calculateSum();
// functionFromMainFile.intro();
// console.log(ans);

//--->> above way of extracting is not good so direct destructuring is prefferd
//--->> by doing this way we did not use . method to destructure the variable
// --- >> use {};;

// const{calculateSum,intro} = require('./sum.js')  ;
// if you do not want to write .js it is assumed by default

const{calculateSum,intro} = require('./sum')  ;
const ans = calculateSum();
intro();
console.log(ans);



