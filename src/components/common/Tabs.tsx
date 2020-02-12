import React from 'react';

import Tab from './Tab';
import { InStylesType } from '../../types';

interface TabProps {
    tabs: string[];
    chooseTab: Function;
    isActive: string;
}

export default function PjmTabs({ tabs, chooseTab, isActive }: TabProps) {
    const handleChange = (event: React.ChangeEvent<{}>) => {
        chooseTab(event);
    };

    const renderTabs = () => {
        return tabs.map(tab => {
            return <Tab key={tab} label={tab} onClick={handleChange} isActive={isActive} />;
        });
    };

    return <div style={styles.flexRow}>{renderTabs()}</div>;
}

const styles: InStylesType = {
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
};
