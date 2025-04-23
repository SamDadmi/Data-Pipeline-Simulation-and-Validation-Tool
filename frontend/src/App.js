import React, { useState } from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [activeSidebar, setActiveSidebar] = useState(null); // 'pipeline' | 'howto' | 'about' | null

  const updateMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 5000);
  };

  const handleSidebarClick = (type) => {
    setActiveSidebar((prev) => (prev === type ? null : type));
  };

  const renderSidebarContent = () => {
    switch (activeSidebar) {
      case 'pipeline':
        return (
          <>
            <h3>Modular Data Pipeline Simulation & Validation Tool</h3>
            <p>
              Construct and simulate custom data-processing pipelines using a node-based interface. Each component represents a logical unit, and connections define the data flow—ideal for modeling real-world systems or prototyping architectures.
            </p>
          </>
        );
      case 'howto':
        return (
          <>
            <h3>Getting Started</h3>
            <ol>
              <li>Select and drag nodes from the toolbar into the canvas.</li>
              <li>Establish connections to define execution flow.</li>
              <li>Double-click a node to configure its parameters.</li>
              <li>Submit the pipeline to validate structure and simulate logic.</li>
            </ol>
          </>
        );
      case 'about':
        return (
          <>
            <h3>About This Project</h3>
            <p>
              <strong>PipelineBuilder</strong> is a full-stack simulation environment built with React, React Flow, and FastAPI. It enables users to visualize modular workflows and verify execution logic by checking for Directed Acyclic Graph (DAG) integrity in real-time.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-root">
      {/* Sidebar Navigation */}
      <div className="sidebar-nav">
        <button onClick={() => handleSidebarClick('pipeline')}>Pipeline Builder</button>
        <button onClick={() => handleSidebarClick('howto')}>How to Use</button>
        <button onClick={() => handleSidebarClick('about')}>About</button>
      </div>

      {/* Overlay Content Panel */}
      {activeSidebar && (
        <div className="info-panel">
          <button className="close-btn" onClick={() => setActiveSidebar(null)}>✖</button>
          {renderSidebarContent()}
        </div>
      )}



      {/* Main Workspace */}
      <div className="main-workspace">
        {message && <div className="popup-message"><p>{message}</p></div>}
        <PipelineToolbar updateMessage={updateMessage} />
        <PipelineUI updateMessage={updateMessage} />
        <SubmitButton updateMessage={updateMessage} />
      </div>
    </div>
  );
}

export default App;
