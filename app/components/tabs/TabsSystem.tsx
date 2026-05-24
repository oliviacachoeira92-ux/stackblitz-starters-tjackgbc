'use client';

import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import TabsNavigation from './TabsNavigation';
import TabPanel from './TabPanel';

interface TabsSystemProps {

  tabs: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];

}

export default function TabsSystem({
  tabs,
}: TabsSystemProps) {

  // =========================
  // INITIAL TAB
  // =========================

  const initialTab =
    useMemo(() => {

      if (
        typeof window ===
        'undefined'
      ) {
        return tabs[0].id;
      }

      const savedTab =
        localStorage.getItem(
          'fenix-active-tab'
        );

      const exists =
        tabs.some(
          (tab) =>
            tab.id === savedTab
        );

      if (
        savedTab &&
        exists
      ) {
        return savedTab;
      }

      return tabs[0].id;

    }, [tabs]);

  // =========================
  // STATE
  // =========================

  const [activeTab, setActiveTab] =
    useState(initialTab);

  // =========================
  // SAVE ACTIVE TAB
  // =========================

  useEffect(() => {

    localStorage.setItem(
      'fenix-active-tab',
      activeTab
    );

  }, [activeTab]);

  // =========================
  // CURRENT TAB
  // =========================

  const currentTab =
    tabs.find(
      (tab) =>
        tab.id === activeTab
    );

  return (

    <div
      className="
        flex
        flex-col
        gap-5
      "
    >

      {/* NAVIGATION */}

      <TabsNavigation
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* PANEL */}

      <TabPanel
        key={activeTab}
      >

        {currentTab?.content}

      </TabPanel>

    </div>

  );

}