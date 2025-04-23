// /frontend/src/nodes/CounterNode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode';

const CounterNode = ({ id }) => {
  const [count, setCount] = useState(0);

  const fields = [
    {
      label: 'Count',
      type: 'text',
      value: count,
      onChange: () => {}, // Output is derived, no need to change
    },
  ];

  const handles = [
    {
      type: 'source',
      position: 'right',
      id: 'output',
      style: { background: '#555' },
    },
  ];

  return (
    <BaseNode
      id={id}
      title="Counter Node"
      fields={fields}
      handles={handles}
      onIncrement={() => setCount(count + 1)}
    />
  );
};

export default CounterNode;
