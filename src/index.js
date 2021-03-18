import React, { useState, useTransition } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import 'antd/dist/antd.css';
import ConcurrentApp from './react-concurrent/ConcurrentApp';
import SynchronousApp from './react-synchronous/SynchronousApp';

import {
  SYNC,
  CONCURRENT,
  LIST_ITEMS_COUNT
} from './constants/constants';
import DELAYS from './constants/delays';
import Toggle from './components/Toggle';

const isSync = (() => {
    if (localStorage.hasOwnProperty(SYNC)) {
      return JSON.parse(localStorage.getItem(SYNC));
    }

    localStorage.setItem(SYNC, true);
    return true;
  })(),
  isConcurrent = (() => {
    if (localStorage.hasOwnProperty(CONCURRENT)) {
      return JSON.parse(localStorage.getItem(CONCURRENT));
    }

    localStorage.setItem(CONCURRENT, false);
    return false;
  })();

function App () {
  const [pagination, setPagination] = useState({ low: 1, high: LIST_ITEMS_COUNT }),
    [modes, setModes] = useState({ [SYNC]: isSync, [CONCURRENT]: isConcurrent }),
    [startTransition, isPending] = useTransition({ timeoutMs: DELAYS.TRANSITION_TIMEOUT });

  return (
    <div>
      <header className="App-header">
        <Toggle
          modes={modes}
          setModes={setModes}
        />
      </header>
      <div className="App-container">
        {
          modes[SYNC] &&
            <SynchronousApp
            />
        }
        {
          modes[CONCURRENT] &&
            <ConcurrentApp
            />
        }
      </div>
    </div>
  );
}

const root = document.getElementById('root');

// The old way to initialize (sync mode)
// ReactDOM.render(<App />, root);

// This makes React use the Concurrent Mode (async)
ReactDOM.createRoot(root).render(<App />);
