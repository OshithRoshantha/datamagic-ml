class OneHotEncoder {
    fit(data) {
      this.categories = [...new Set(data)];
    }
  
    transform(data) {
      return data.map(value => 
        this.categories.map(category => (category === value ? 1 : 0))
      );
    }
  }
  
  module.exports = OneHotEncoder;