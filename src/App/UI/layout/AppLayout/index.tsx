import React from 'react';

import styles from './AppLayout.module.css'
import Sidebar from "@/App/UI/layout/GameLayout/Sidebar";
import {defaultProps} from "@/App/utils/types";

type AppLayoutProps = {
  showSidebar?: boolean,
} & defaultProps

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const showSidebar = props.showSidebar || false;

  return (
    <main className={styles.container}>
      {showSidebar ? <Sidebar /> : <></>}
      <div className={styles.main}>
        <h1 className={styles.title}>Guess The Color</h1>
        {props.children}
      </div>
    </main>
  );
};

export default AppLayout;
