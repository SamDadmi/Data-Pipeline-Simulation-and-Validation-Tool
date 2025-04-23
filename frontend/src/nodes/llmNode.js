// /frontend/src/nodes/LLMNode.js
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM Node"
      fields={[
        { label: 'Description', type: 'text', value: 'This is an LLM node.' },
      ]}
      handles={[
        { id: 'system', type: 'target', position: Position.Left, style: { top: '33%' } },
        { id: 'prompt', type: 'target', position: Position.Left, style: { top: '66%' } },
        { id: 'response', type: 'source', position: Position.Right },
      ]}
    />
  );
};

export default LLMNode;
