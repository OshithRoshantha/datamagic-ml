const {
    MinMaxScaler,
    StandardScaler
  } = require('../src');

  describe('datamagic-ml', () => {
    test('Normalizes data', () => {
      const scaler = new MinMaxScaler();
      const data = [1, 2, 3, 4, 5];
      scaler.fit(data);
      expect(scaler.transform(data)).toEqual([0, 0.25, 0.5, 0.75, 1]);
    });

    test('Standerdized data', () => {
        const scaler = new StandardScaler();
        const data = [1, 2, 3, 4, 5];
        scaler.fit(data);
        expect(scaler.transform(data)).toEqual([-1.414213562373095, -0.7071067811865475, 0, 0.7071067811865475, 1.414213562373095]);
      });
  });