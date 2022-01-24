
function checkWords(word){
    if(word.length > 6)
      return word
  }
  
  function filter(wordList, callbackFunction){
    const answerList = []
    for (var index = 0; index < wordList.length; index++) {
      let checkedWord = callbackFunction(wordList[index], index, wordList);
      answerList.push(checkedWord);
    }
    return answerList
  }
  
  const wordList = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
  let answer = filter(wordList, checkWords);
  console.log(answer);
  