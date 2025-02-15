# DataMagic-ML

A lightweight JavaScript library for essential feature engineering tasks in machine learning. Provides utilities for normalization, standardization, one-hot encoding, and missing value handling. Designed for simplicity and performance in both Node.js and browser environments.

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
