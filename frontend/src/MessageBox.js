import React from 'react';

const MessageBox = ({ message }) => {
  if (!message) return null; // Don't show the message box if there's no message

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      padding: '10px',
      backgroundColor: '#f0ad4e',
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      zIndex: 1000,
    }}>
      {message}
    </div>
  );
};

export default MessageBox;
