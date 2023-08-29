import React, {useEffect, useState} from 'react';

import styles from './AppLayout.module.css'
import Sidebar from "@/App/UI/layout/GameLayout/Sidebar";
import {defaultProps} from "@/App/utils/types";
import useDeviceDetect from "@/App/hooks/useDeviceDetect";
import {useGameContext} from "@/App/context/GameContext";
import sidebar from "@/App/UI/layout/GameLayout/Sidebar";

type AppLayoutProps = {
  showSidebar?: boolean,
} & defaultProps

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const {isSmallDevice} = useDeviceDetect();
  const {setSidebarOpen, sidebarOpen} = useGameContext();
  const showSidebar = props.showSidebar || false;
  let toShow = sidebarOpen ? <div className={`${(isSmallDevice && showSidebar && sidebarOpen ) ? styles.bkdrp : ''}`} style={{minWidth: '360px'}}><Sidebar /></div> : <></>;

  return (
    <main className={styles.container}>
      {showSidebar ? toShow : <></>}
      <div className={styles.main}>
        <h1 className={styles.title}>Guess The Color</h1>
        {props.children}
      </div>
    </main>
  );
};

export default AppLayout;
