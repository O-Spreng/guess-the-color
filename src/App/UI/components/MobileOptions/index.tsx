import React from 'react';

import styles from './MobileOptions.module.css';
import {useGameContext} from "@/App/context/GameContext";

const MobileOptions = () => {
  const {sidebarOpen, setSidebarOpen} =  useGameContext();

  const handleToggleSidebar = () => {
    sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
  }

  return (
    <button className={styles.container} onClick={handleToggleSidebar}>{sidebarOpen? 'Close Game Log':'Open Game Log'}</button>
  );
};

export default MobileOptions;
