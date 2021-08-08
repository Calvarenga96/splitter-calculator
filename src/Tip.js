class Tip {
  constructor(value, bill, people) {
    this.value = value;
    this.bill = bill;
    this.people = people;
  }

  initCalculator() {
    const calculation = this._calculateTip();
    return calculation;
  }

  _calculateTip() {
    const totalPorcentage = 100;
    const tipPorcentage = this.value;
    const totalToPay = this.bill;
    const numberOfPeople = this.people;

    return (((totalPorcentage + tipPorcentage) * totalToPay) / totalPorcentage) / numberOfPeople;
  }
}

export default Tip;
