const {
    MinMaxScaler,
    StandardScaler,
    OneHotEncoder,
    CleanMissings
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

    test('Encoding data', () => {
        const encoder = new OneHotEncoder();
        const categories = ['red', 'green', 'blue'];
        encoder.fit(categories);
        const encoded = encoder.transform(['green', 'red', 'yellow', 'blue']);
        expect(encoded).toEqual([[0,1,0],[1,0,0],[0,0,0],[0,0,1]]);
    }); 
    
    test('Handle missing data', () => {
        const testArray = [1, null, 3, 4, NaN, 6];
        expect(CleanMissings(testArray, 'mean')).toEqual([1, 3.5, 3, 4, 3.5, 6]);
        expect(CleanMissings(testArray, 'median')).toEqual([1, 4, 3, 4, 4, 6]);
        expect(CleanMissings(testArray, 'constant', 0)).toEqual([1, 0, 3, 4, 0, 6]);
    });
  });