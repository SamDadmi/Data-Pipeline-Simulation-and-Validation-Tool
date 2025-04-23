// /frontend/src/nodes/UppercaseNode.js
import React, { useState } from 'react';
import BaseNode from './BaseNode';

const UppercaseNode = ({ id }) => {
  const [inputValue, setInputValue] = useState('');

  const fields = [
    {
      label: 'Input',
      type: 'text',
      value: inputValue,
      onChange: setInputValue,
    },
    {
      label: 'Output',
      type: 'text',
      value: inputValue.toUpperCase(),
      onChange: () => {}, // Output is derived, no need to change
    },
  ];

  const handles = [
    {
      type: 'target',
      position: 'left',
      id: 'input',
      style: { background: '#555' },
    },
    {
      type: 'source',
      position: 'right',
      id: 'output',
      style: { background: '#555' },
    },
  ];

  return <BaseNode id={id} title="Uppercase Node" fields={fields} handles={handles} />;
};

export default UppercaseNode;
