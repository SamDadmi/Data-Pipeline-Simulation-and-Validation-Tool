// NodeInspector.jsx
import React from 'react';

const NodeInspector = ({ selectedNode }) => {
  if (!selectedNode) {
    return (
      <div className="module-inspector">
        <h3>Node Inspector</h3>
        <p>No node selected</p>
      </div>
    );
  }

  const { id, type, data } = selectedNode;

  return (
    <div className="module-inspector">
      <h3>Node Inspector</h3>
      <div className="module-section">
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Status:</strong> {data?.isConnected ? '✅ Connected' : '⚠️ Not Connected'}</p>
      </div>
      {data && (
        <div className="module-section">
          <h4>Configured Parameters</h4>
          {Object.entries(data).map(([key, value]) =>
            key !== 'isConnected' ? (
              <p key={key}><strong>{key}:</strong> {String(value)}</p>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default NodeInspector;
