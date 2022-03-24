/* exported oddOrEven */
function oddOrEven(numbers) {
  var output = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) output.push('even'); else output.push('odd');
  }
  return output;
}
