import React from "react";


const ENV = import.meta.env.VITE_ENV || "default";
const MACHINE = import.meta.env.VITE_MACHINE || "default";
const PORT = import.meta.env.VITE_PORT || 3000;
const APP_NAME = import.meta.env.VITE_APP_NAME || "POC01-NodeReactSetup";

const ReactConnection = () => {
  // render check
  console.log(`React connection created successfully...`);
  console.log(`
    Environment: ${ENV}
    Machine: ${MACHINE}
    Port: ${PORT}
    APP_NAME: ${APP_NAME}
  `);

  // jsx
  return (
    <React.Fragment>
      {/* ReactConnection */}

      <div>
        <h1>React Connection</h1>
        <p>React connection created successfully....</p>
        <ul>
          <li>Environment: {ENV}</li>
          <li>Machine: {MACHINE}</li>
          <li>Port: {PORT}</li>
          <li>App Name: {APP_NAME}</li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default ReactConnection;
