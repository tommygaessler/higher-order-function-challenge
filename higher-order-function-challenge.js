// any([ 8, 9, 10, 11 ],
// greaterThan10)
// true

//loop through array and find if at least one value is greater then 10

function any(num, ifLarger10)
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
