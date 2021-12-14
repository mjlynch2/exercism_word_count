export const countWords = (phrase) => {
  // match any of word plus apostrophe plus word OR word
  const regex = /([\w]+['][\w]+)|[\w]+/g;
  let wordList = phrase.toLowerCase().match(regex)
  let resultList = [];
  let resultCount = {};

  wordList.forEach(e => {
  if(resultList.includes(e)){
      resultCount[e]++;
    } else {
      resultList.push(e);
      resultCount[e] = 1;
    }
  })
  return resultCount;
};