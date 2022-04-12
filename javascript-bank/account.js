/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

var AccountPrototype = {
  deposit: function (amount) {
    if (amount > 0 && Number.isInteger(amount)) {
      var newDeposit = new Transaction('deposit', amount);
      this.transactions.push(newDeposit);
      return true;
    }
    return false;
  },
  withdraw: function (amount) {
    if (amount > 0 && Number.isInteger(amount)) {
      var newWithdraw = new Transaction('withdrawal', amount);
      this.transactions.push(newWithdraw);
      return true;
    }
    return false;
  },
  getBalance: function () {
    var output = 0;
    this.transactions.forEach(function (element) {
      if (element.type === 'deposit') {
        output += element.amount;
      } else {
        output -= element.amount;
      }
    });
    return output;
  }
};

for (var x in AccountPrototype) {
  Account.prototype[x] = AccountPrototype[x];
}
