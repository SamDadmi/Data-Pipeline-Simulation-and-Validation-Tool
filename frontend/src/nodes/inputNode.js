// /frontend/src/nodes/InputNode.js
import { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || `input_${id}`);
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input Node"
      fields={[
        { label: 'Name', type: 'text', value: name, onChange: setName },
        { label: 'Type', type: 'select', value: inputType, onChange: setInputType, options: ['Text', 'File'] },
      ]}
      handles={[
        { id: 'value', type: 'source', position: Position.Right },
      ]}
    />
  );
};

export default InputNode;
