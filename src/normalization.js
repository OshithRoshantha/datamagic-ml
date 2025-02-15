class MinMaxScaler {
    fit(data) {
      this.min = Math.min(...data);
      this.max = Math.max(...data);
    }
  
    transform(data) {
      return data.map(val => (val - this.min) / (this.max - this.min));
    }
  }
  
  module.exports = MinMaxScaler;