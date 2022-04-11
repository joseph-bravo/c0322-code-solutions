/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var output = 0;
    numbers.forEach(function (element) {
      output += element;
    });
    return output;
  },
  getAverage: function (numbers) {
    var sum = this.sumAll(numbers);
    return sum / numbers.length;
  }
};
