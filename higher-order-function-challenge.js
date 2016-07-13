// any([ 8, 9, 10, 11 ],
// greaterThan10)
// true

//loop through array and find if at least one value is greater then 10

console.log("Question 1");

function any(num, callback)
{
  var isTrue = false;
  for (var i = 0; i < num.length; i++)
  {
    isTrue = callback(num[i])
    if(isTrue === true)
    {
      return true;
    }
  }
  return false;
}

function greaterThan10(anything)
{
  if (anything > 10)
  {
    return true;
  }
}

console.log(any([ 8, 9, 10, 11 ], greaterThan10));
// surprise()()
// 'surprise!'
// Return a function

console.log("Question 2");

function surprise()
{
  return function secondFunction()
  {
    return "surprise!";
  }
}

console.log(surprise()());

// filter([ 1, 2, 3, 4 ], onlyOdd)
// [ 1, 3 ]
// onlyOdd is a callback

console.log("Question 3");

function filter(findOdd, callback2)
{
  var odds = [];
  for (var i = 0; i < findOdd.length; i++)
  {
    if(callback2(findOdd[i]) != undefined)
    {
      odds.push(findOdd[i]);
    }
  }
  return odds;
}

function onlyOdd(checkOdd)
{
  if (checkOdd % 2 !== 0)
  {
    return checkOdd;
  }
  else {
    return;
  }
}

console.log(filter([ 1, 2, 3, 4 ], onlyOdd));

// sumTwoNumbers(3)(9)
// 12
// Return a function

console.log("Question 4");

function sumTwoNumbers(first)
{
  return function sumTwoNumbersSecond(second)
  {
    return first + second;
  }
}

console.log(sumTwoNumbers(3)(9));
