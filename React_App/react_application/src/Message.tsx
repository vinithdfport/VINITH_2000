import React from 'react';

type MessageProps = {
  text: string;
  type?: 'info' | 'success' | 'error' | 'warning'; // Optional message types
  onClose?: () => void; // Optional close button
};

const Message: React.FC<MessageProps> = ({ text, type = 'info', onClose }) => {
  // Define styles for each message type
  const getMessageStyle = () => {
    switch (type) {
      case 'success':
        return { backgroundColor: '#d4edda', color: '#155724' };
      case 'error':
        return { backgroundColor: '#f8d7da', color: '#721c24' };
      case 'warning':
        return { backgroundColor: '#fff3cd', color: '#856404' };
      default:
        return { backgroundColor: '#d1ecf1', color: '#0c5460' };
    }
  };

  return (
    <div style={{ padding: '10px', borderRadius: '4px', margin: '10px 0', display: 'flex', alignItems: 'center', ...getMessageStyle() }}>
      <span style={{ flex: 1 }}>{text}</span>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            marginLeft: '10px',
            fontWeight: 'bold',
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Message;
