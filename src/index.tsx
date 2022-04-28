import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './n1-main/App';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Provider store={}>
    <App />
    </Provider>
);
