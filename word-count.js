export const countWords = (phrase) => {
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