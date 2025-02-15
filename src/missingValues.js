const MissingValues = (data, strategy = 'mean', fillValue = 0) => {
    const cleanData = data.filter(val => val !== null && !isNaN(val));
    
    if (cleanData.length === 0) return data.fill(fillValue);
  
    let replacement;
    switch (strategy) {
      case 'mean':
        replacement = cleanData.reduce((a, b) => a + b, 0) / cleanData.length;
        break;
      case 'median':
        {
            const sorted = [...cleanData].sort((a, b) => a - b);
            replacement = sorted[Math.floor(sorted.length / 2)];
            break;
        }
      case 'constant':
        replacement = fillValue;
        break;
      default:
        throw new Error('Invalid strategy');
    }
  
    return data.map(val => val === null || isNaN(val) ? replacement : val);
  };
  
  module.exports = MissingValues;