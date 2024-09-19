//find out the different word from given two strings
var uncommonFromSentences = function (s1, s2) {
  const word1 = s1.split(" ");
  const word2 = s2.split(" ");

  const combined_list = word1.concat(word2);
  console.log(combined_list);

  let output = [];
  let repeated_words = [];

  for (let word of combined_list) {
    if (!output.includes(word)) {
      output.push(word);
    } else {
      repeated_words.push(word);
    }
  }

  for (let word of repeated_words) {
    if (output.includes(word)) {
      output = output.filter((item) => item !== word);
    }
  }
  return output;
};
