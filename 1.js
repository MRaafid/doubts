const removeDup = (arr) => arr.reduce(acc, curr)=>!acc.some((elem)=>JSON.stringify(elem)=== JSON.stringify(curr)) ? [...acc, curr] : acc,
[]
);
