import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Post } from './components/Posts/Posts';
import { Sidebar } from './components/Sidebar/Sidebar';

import './css/global.css'
import styles from './css/App.module.css'


function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
