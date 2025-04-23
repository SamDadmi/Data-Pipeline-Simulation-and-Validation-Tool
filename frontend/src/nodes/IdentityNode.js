// /frontend/src/nodes/IdentityNode.js
import React from 'react';
import BaseNode from './BaseNode';

const IdentityNode = ({ id }) => {
  const fields = [
    {
      label: 'Input',
      type: 'text',
      value: '',
      onChange: (value) => console.log('IdentityNode input changed:', value),
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

  return <BaseNode id={id} title="Identity Node" fields={fields} handles={handles} />;
};

export default IdentityNode;
