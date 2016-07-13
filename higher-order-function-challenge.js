// any([ 8, 9, 10, 11 ],
// greaterThan10)
// true

//loop through array and find if at least one value is greater then 10

console.log("Question 1");

function any(num, callback)
{
  for (var i = 0; i < num.length; i++)
  {
    if (num[i] > 10)
    {
      return greaterThan10();
    }
  }
  return false;
}

var greaterThan10 = function()
{
  return true;
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
    if (findOdd[i] % 2 !== 0)
    {
      var odd = findOdd[i];
      odds.push(odd);

      // return onlyOdd;
      // wtf is onlyOdd for, and how do I use it
    }
  }
  return odds;
}

// var onlyOdd = function()
// {
//   return odds;
// }

console.log(filter([ 1, 2, 3, 4 ]));
// supposed to be
// console.log(filter([ 1, 2, 3, 4 ], onlyOdd));

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
