
function sumOfAllElementsInTheList(number){
    console.log(number);
  }
  
  function forEach(numberList, callbackFunction){
    let previousValue = 0
    for (var index = 0; index < numberList.length; index++) {
      let totalSum = callbackFunction(numberList[index], index, numberList);
    }
  }
  
  const numberList = [1, 2, 3, 4, 5]
  let answer = forEach(numberList, sumOfAllElementsInTheList)
  