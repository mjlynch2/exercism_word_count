export const countWords = (phrase) => {
  const regex = /\S([a-zA-Z']|[0-9])+/g;
  let wordList = phrase.match(regex);
  let resultList = [];
  let resultCount = {};
  wordList.forEach(e => {
    if(resultList.includes(e)){
      resultCount[e]++;
    } else {
      resultList.push(e);
      resultCount[String(e)] = 1;
    }
  })
  return resultCount;
};