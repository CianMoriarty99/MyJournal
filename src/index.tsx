import React from 'react';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import * as ReactDOM from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
//
// const root = createRoot(
//   document.getElementById('root') as HTMLElement
// );

  const root = <React.StrictMode>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <App />
  </React.StrictMode>

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
