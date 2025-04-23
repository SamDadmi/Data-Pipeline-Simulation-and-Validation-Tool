// /frontend/src/nodes/BaseNode.js
import { Handle, Position } from 'reactflow';
import PropTypes from 'prop-types';

const BaseNode = ({ id, title, fields, handles }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', width: '200px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{title}</div>
      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: '5px' }}>
          <label>
            {field.label}:
            {field.type === 'text' ? (
              <input
                type="text"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                style={{ width: '100%' }}
              />
            ) : (
              <select
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                style={{ width: '100%' }}
              >
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </label>
        </div>
      ))}
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
    </div>
  );
};

BaseNode.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  handles: PropTypes.array.isRequired,
};

export default BaseNode;
