/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

var BankPrototypes = {
  openAccount: function (holder, balance) {
    if (!(balance > 0) || !(Number.isInteger(balance))) {
      return null;
    }
    var openingAcc = new Account(this.nextAccountNumber, holder);
    openingAcc.deposit(balance);
    this.accounts.push(openingAcc);
    this.nextAccountNumber++;
    return openingAcc.number;
  },
  getAccount: function (number) {
    var findAcc = this.accounts.find(function (element) {
      return element.number === number;
    });
    if (!findAcc) {
      return null;
    }
    return findAcc;
  },
  getTotalAssets: function () {
    if (!this.accounts.length) {
      return 0;
    }
    var output = 0;
    this.accounts.forEach(function (element) {
      output += element.getBalance();
    });
    return output;
  }
};

for (var x in BankPrototypes) {
  Bank.prototype[x] = BankPrototypes[x];
}
