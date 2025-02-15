const {
    MinMaxScaler
  } = require('../src');

  describe('Feature Engineering Utilities', () => {
    test('MinMaxScaler normalizes data', () => {
      const scaler = new MinMaxScaler();
      const data = [1, 2, 3, 4, 5];
      scaler.fit(data);
      expect(scaler.transform(data)).toEqual([0, 0.25, 0.5, 0.75, 1]);
    });
  });