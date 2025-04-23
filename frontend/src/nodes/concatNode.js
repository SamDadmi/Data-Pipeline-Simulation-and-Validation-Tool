// /frontend/src/nodes/ConcatNode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode';

const ConcatNode = ({ id }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const fields = [
    {
      label: 'Input 1',
      type: 'text',
      value: input1,
      onChange: setInput1,
    },
    {
      label: 'Input 2',
      type: 'text',
      value: input2,
      onChange: setInput2,
    },
    {
      label: 'Output',
      type: 'text',
      value: input1 + input2,
      onChange: () => {}, // Output is derived, no need to change
    },
  ];

  const handles = [
    {
      type: 'target',
      position: 'left',
      id: 'input1',
      style: { background: '#555' },
    },
    {
      type: 'target',
      position: 'left',
      id: 'input2',
      style: { background: '#555' },
    },
    {
      type: 'source',
      position: 'right',
      id: 'output',
      style: { background: '#555' },
    },
  ];

  return <BaseNode id={id} title="Concat Node" fields={fields} handles={handles} />;
};

export default ConcatNode;
