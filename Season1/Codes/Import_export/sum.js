
console.log('sum module');


function calculateSum(){
    let x = 5 ; 
    let y = 10 ;
    let sum = x + y ;
    return sum ;
}

function intro(){
    console.log('anurag');
    console.log('SDE-1');  
}



// module.exports = calculateSum ;
module.exports = {
    calculateSum ,
    intro
}
// behind the scene the js implicitely assume key and value pair or if 
// you did want to this explicitely you can

