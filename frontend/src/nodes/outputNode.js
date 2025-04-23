// /frontend/src/nodes/OutputNode.js
import { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || `output_${id}`);
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Output Node"
      fields={[
        { label: 'Name', type: 'text', value: name, onChange: setName },
        { label: 'Type', type: 'select', value: outputType, onChange: setOutputType, options: ['Text', 'Image'] },
      ]}
      handles={[
        { id: 'value', type: 'target', position: Position.Left },
      ]}
    />
  );
};

export default OutputNode;
