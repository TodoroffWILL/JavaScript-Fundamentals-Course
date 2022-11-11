// String searching with INDEXOF


// Get the index number of the word 'dolor'
let dolorIndex = text.indexOf("dolor");
console.log(dolorIndex);
// Get the last index number of word 'dolor' which means it starts from the back of the string !
let lastMDolorindex = text.lastIndexOf("dolor");
console.log(lastMDolorindex);

// Search word that is missing: RETURNS -1 !!!

let missingWordIndex = text.indexOf('doncho');
console.log(missingWordIndex);
