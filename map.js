
function increaseByOne(num1){
    let newValue = num1 + 1;
    return newValue;
  }
  
  function map(numberList, callbackFunction){
    const answerList = []
    for (var index = 0; index < numberList.length; index++) {
      let sum = callbackFunction(numberList[index], index, numberList);
      answerList.push(sum);
    }
    return answerList
  }
  
  const numberList = [1,2,3,4,5]
  let answer = map(numberList, increaseByOne);
  console.log(answer);
  