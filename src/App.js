import React from 'react';
import './App.css';
import Chart from './features/chart/Chart';
import Legend from './features/chart/Legend';
import Header from './features/chart/Header';

function App() {
  return (
    <div className="App p-6 mx-auto max-w-screen-lg">
      <Header />
      <Chart />
      <Legend />
    </div>
  );
}

export default App;
