class Tip {
  constructor(value, bill) {
    this.value = value;
    this.bill = bill;
  }

  calculateTip() {
    // eliminar los parentesis que genera eslint para poder hacer los calculos correctos o salen mal
    const calculate = (porcentage * this.bill) / 100;
    return calculate;
  }

  porcentage() {
    return this.value + 100;
  }
}

export default Tip;
