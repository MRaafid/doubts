const find = (string_name, old_word, new_word) => string_name.replace(old_word, new_word);
const findall = (string_name, old_word, new_word) => string_name.replaceAll(old_word, new_word);
let c = "The quick brown fox jumped over the lazy. The lazy dog yawned and stretched, but the quick brown fox continued to explore the forest. Foxes are known 	for their agility, and this quick brown fox was no exception.";
let d = find(c, 'fox', 'wolf');
let e = findall(c, 'fox', 'wolf');
console.log(`orginal: ${c}`);
console.log(`changed by replace: ${d}`);
console.log(`changed by replace all: ${e}`);


