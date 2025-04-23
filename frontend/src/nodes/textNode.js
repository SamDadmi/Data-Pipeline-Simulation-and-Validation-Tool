// /frontend/src/nodes/TextNode.js
import { useState } from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      id={id}
      title="Text Node"
      fields={[
        { label: 'Text', type: 'text', value: text, onChange: setText },
      ]}
      handles={[
        { id: 'output', type: 'source', position: Position.Right },
      ]}
    />
  );
};

export default TextNode;
