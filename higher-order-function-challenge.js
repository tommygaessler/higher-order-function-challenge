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

console.log("Question 2");
