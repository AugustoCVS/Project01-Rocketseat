import { useState } from 'react';
import { Header } from './components/Header/Header';
import './css/global.css'

import styles from './css/App.module.css'
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <h2>coisa</h2>
          <p>mais coisa</p>
        </main>
      </div>
    </div>
  )
}

export default App
