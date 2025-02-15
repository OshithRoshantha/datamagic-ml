class StandardScaler {
    fit(data) {
      this.mean = data.reduce((a, b) => a + b, 0) / data.length;
      const variance = data.reduce((a, b) => a + (b - this.mean) ** 2, 0) / data.length;
      this.std = Math.sqrt(variance);
    }
  
    transform(data) {
      return data.map(val => (val - this.mean) / this.std);
    }
  }
  
  module.exports = StandardScaler;