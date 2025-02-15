# DataMagic-ML

A lightweight JavaScript library for essential feature engineering tasks. Provides utilities for normalization, standardization, one-hot encoding, and missing value handling. Designed for simplicity and performance in both Node.js and browser environments.

## Features

- **Min-Max Scaling**: Normalize data to a specific range.
- **Standardization**: Transform data to have zero mean and unit variance.
- **One-Hot Encoding**: Convert categorical data into numerical format.
- **Missing Value Handling**: Replace missing values with mean, median, or a constant.

## Installation

You can install `datamagic-ml` via npm:
```bash
npm install datamagic-ml
```
Or using yarn:
```bash
yarn add datamagic-ml
```

## Usage
Importing the Library:
```bash
const { MinMaxScaler, StandardScaler, OneHotEncoder, CleanMissings } = require('datamagic-ml');
```
Min-Max Scaling
```bash
const scaler = new MinMaxScaler();
const data = [1, 2, 3, 4, 5];
scaler.fit(data);
console.log(scaler.transform(data));
```
Standardization
```bash
const stdScaler = new StandardScaler();
const data = [1, 2, 3, 4, 5];
stdScaler.fit(data);
console.log(stdScaler.transform(data));
```
One-Hot Encoding
```bash
const encoder = new OneHotEncoder();
encoder.fit(['red', 'green', 'blue']);
console.log(encoder.transform(['green', 'red', 'yellow', 'blue'])); 
```
Handling Missing Values
```bash
const testArray = [1, null, 3, 4, NaN, 6];
console.log(CleanMissings(testArray, 'mean'));
console.log(CleanMissings(testArray, 'median'));
console.log(CleanMissings(testArray, 'constant', 0));
```

## License
Licensed under the [MIT License](https://opensource.org/licenses/MIT).
