
function sumOfAllElementsInTheList(previousValue, currentValue){
    return previousValue + currentValue
  }
  
  function reduce(numberList, callbackFunction){
    let previousValue = 0
    for (var index = 0; index < numberList.length; index++) {
      let totalSum = callbackFunction(previousValue, numberList[index], index, numberList);
      previousValue = totalSum
    }
    return previousValue
  }
  
  const numberList = [1, 2, 3, 4, 5]
  let answer = reduce(numberList, sumOfAllElementsInTheList)
  console.log(answer)
  