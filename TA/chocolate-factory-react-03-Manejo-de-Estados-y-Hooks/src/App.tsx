import React, { useState } from 'react';

type CounterState = {
  production: number;
  profit: number;
};

const Counter: React.FC = () => {
  const [state, setState] = useState<CounterState>({
    production: 0,
    profit: 0,
  });

  const increaseProduction = () => {
    const newProduction = state.production + 1;
    const newProfit = newProduction * 10;

    setState({
      ...state,
      production: newProduction,
      profit: newProfit,
    });
  };

  return (
    <div>
      <h2>Production: {state.production}</h2>
      <h2>Profit: {state.profit}</h2>
      <button onClick={increaseProduction}>Increase Production</button>
    </div>
  );
};

export default Counter;
